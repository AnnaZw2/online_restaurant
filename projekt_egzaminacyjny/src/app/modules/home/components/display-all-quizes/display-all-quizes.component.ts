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
  constructor(private quizService: QuizService,private router: Router) {}
  quizzes: QuizDto[] = [];
  ngOnInit(){
  this.quizService.getAll().subscribe((quizzes) => {
      console.log(quizzes);
      this.quizzes = quizzes;
    });


  }

  redirectToQuiz(quizId: string) {
    this.router.navigate(['/quiz', quizId]);
  }



}
