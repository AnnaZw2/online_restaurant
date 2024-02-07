import { QuizService } from '../../../../features/services/quiz/quiz.service';
import { Component, OnInit } from '@angular/core';
import { QuizDto } from 'src/app/features/dto/quiz.dto';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/services/user/user.service';
import { CategoryEnum } from 'src/app/features/dto/category.enum';

@Component({
  selector: 'app-display-all-quizes',
  templateUrl: './display-all-quizes.component.html',
  styleUrls: ['./display-all-quizes.component.scss'],
})
export class DisplayAllQuizesComponent implements OnInit {
  quizzes: QuizDto[] = [];
  filteredQuizzes: QuizDto[] = [];
  currentPage = 1;
  pageSize = 10; // Number of items per page
  totalQuizzes = 0;
  first = this.currentPage * this.pageSize - this.pageSize

  selectedCategory: CategoryEnum | null |string = null
  constructor(private quizService: QuizService,private userService: UserService, private router: Router) {}
 

  ngOnInit() {
    console.log('DisplayAllQuizesComponent');
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAll().subscribe((quizzes) => {
      this.quizzes = quizzes;
      this.totalQuizzes = this.quizzes.length; 
    });
  }

  getPaginatedQuizzes(): QuizDto[] {
    let quizzesToDisplay = this.quizzes; // By default, display all quizzes
    
    // Check if filters are applied
    if (this.selectedCategory !== null) {
      quizzesToDisplay = this.filteredQuizzes; // If filters are applied, display filtered quizzes
    }
    
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, quizzesToDisplay.length);
    return quizzesToDisplay.slice(startIndex, endIndex); // Use filtered quizzes for pagination if filters are applied
  }

  onPageChange(event: any) {
    console.log("current page",this.currentPage)
    console.log("current - 1",this.currentPage - 1)
    console.log(this.totalQuizzes)
    this.currentPage = event.page + 1;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalQuizzes / this.pageSize);
  }

  redirectToQuiz(quizId: string) {
    this.router.navigate(['/quiz', quizId]);
  }

 
  isAuthentiticated(): boolean {
    return this.userService.isAuthenticated();
  }
   
  applyFilters(filterCriteria: any) {
    const { category } = filterCriteria;
    this.selectedCategory = category;
    // Apply filters here
    this.filteredQuizzes = this.quizzes.filter((quiz) => {
      // Implement filtering logic based on filter criteria
      if(this.selectedCategory=="all") {
        this.selectedCategory
      }
     else if (this.selectedCategory) {
        return quiz.category === this.selectedCategory;
      }
      return true; // Return true if no filters are applied
    });
    console.log("filteredQuizzes",this.filteredQuizzes)
    this.totalQuizzes = this.filteredQuizzes.length; // Update totalQuizzes with the length of filtered quizzes
    // Reset currentPage when filters are applied
    this.currentPage = 1;
    this.first = 0;
  }
}
