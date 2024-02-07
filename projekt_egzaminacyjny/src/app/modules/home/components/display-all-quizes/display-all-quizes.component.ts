import { QuizService } from '../../../../features/services/quiz/quiz.service';
import { Component, OnInit } from '@angular/core';
import { QuizDto } from 'src/app/features/dto/quiz.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-quizes',
  templateUrl: './display-all-quizes.component.html',
  styleUrls: ['./display-all-quizes.component.scss'],
})
export class DisplayAllQuizesComponent implements OnInit {
  quizzes: QuizDto[] = [];
  currentPage = 1;
  pageSize = 10; // Number of items per page
  totalQuizzes = 0;
  first = this.currentPage * this.pageSize - this.pageSize
  constructor(private quizService: QuizService, private router: Router) {}

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
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalQuizzes);
    return this.quizzes.slice(startIndex, endIndex);
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
}
