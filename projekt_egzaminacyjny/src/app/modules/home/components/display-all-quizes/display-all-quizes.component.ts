/* eslint-disable indent */
import { QuizService } from '../../../../features/services/quiz/quiz.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  //pagination
  private quizzes: QuizDto[] = [];
  private filteredQuizzes: QuizDto[] = [];
  public currentPage: number = 1;
  public pageSize: number = 10; // Number of items per page
  public totalQuizzes: number = 0;
  public first: number = this.currentPage * this.pageSize - this.pageSize;

  //filter
  private selectedCategory: CategoryEnum | string | null = null;
  private filterByTitle: string = '';
  private showOnlyWithLikes: boolean = false;
  private sortBy: string = 'default';

  public constructor(
    private quizService: QuizService,
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.loadQuizzes();
  }

  public loadQuizzes(): void {
    this.quizService.getAll().subscribe((quizzes: QuizDto[]) => {
      this.quizzes = quizzes;
      this.totalQuizzes = this.quizzes.length;
    });
  }

  public getPaginatedQuizzes(): QuizDto[] {
    let quizzesToDisplay: QuizDto[] = this.quizzes; // By default, display all quizzes

    // Check if filters are applied
    if (
      this.selectedCategory !== null ||
      this.filterByTitle ||
      this.showOnlyWithLikes ||
      this.sortBy !== 'default'
    ) {
      quizzesToDisplay = this.filteredQuizzes; // If filters are applied, display filtered quizzes
    }
    const startIndex: number = (this.currentPage - 1) * this.pageSize;
    const endIndex: number = Math.min(
      startIndex + this.pageSize,
      quizzesToDisplay.length
    );

    return quizzesToDisplay.slice(startIndex, endIndex); // Use filtered quizzes for pagination if filters are applied
  }

  public onPageChange(event: any): void {
    this.currentPage = event.page + 1;
  }

  public getTotalPages(): number {
    return Math.ceil(this.totalQuizzes / this.pageSize);
  }

  public redirectToQuiz(quizId: string): void {
    this.router.navigate(['/quiz', quizId]);
  }

  public isAuthentiticated(): boolean {
    return this.userService.isAuthenticated();
  }

  public applyFilters(filterCriteria: any): void {
    const { category, title } = filterCriteria;
    this.selectedCategory = category;
    this.filterByTitle = title;
    this.showOnlyWithLikes = filterCriteria.showOnlyWithLikes;
    this.sortBy = filterCriteria.sortBy;

    // Apply filters here
    if (this.selectedCategory || this.filterByTitle || this.showOnlyWithLikes) {
      this.filteredQuizzes = this.quizzes.filter((quiz: QuizDto) => {
        // Implement filtering logic based on filter criteria
        let categoryMatch: boolean = true;
        let titleMatch: boolean = true;
        let likesMatch: boolean = true;

        if (this.selectedCategory && this.selectedCategory !== 'all') {
          categoryMatch = quiz.category === this.selectedCategory;
        }

        if (this.filterByTitle && this.filterByTitle.trim() !== '') {
          titleMatch = quiz.title
            .toLowerCase()
            .includes(this.filterByTitle.toLowerCase());
        }

        if (this.showOnlyWithLikes) {
          likesMatch = quiz.likes > 0;
        }

        return categoryMatch && titleMatch && likesMatch;
      });
    } else {
      // If no filters are applied, use all quizzes
      this.filteredQuizzes = this.quizzes.slice();
    }

    this.totalQuizzes = this.filteredQuizzes.length;
    this.currentPage = 1; // Reset currentPage when filters are applied
    this.first = 0;

    this.applySort();
  }

  public applySort(): void {
    switch (this.sortBy) {
      case 'name':
        this.filteredQuizzes.sort((a: QuizDto, b: QuizDto) =>
          a.title.localeCompare(b.title)
        );
        break;
      case 'date':
        this.filteredQuizzes.sort(
          (a: QuizDto, b: QuizDto) =>
            new Date(b.creationDate).getTime() -
            new Date(a.creationDate).getTime()
        );
        break;
      case 'most-likes':
        this.filteredQuizzes.sort(
          (a: QuizDto, b: QuizDto) => b.likes - a.likes
        );
        break;
      default:
        // Default sorting option, no need to sort
        break;
    }

    this.cdr.detectChanges();
  }
}
