import { Quiz } from 'src/app/modules/quiz/models/quiz.model';
import { QuizService } from '../../../../features/services/quiz.service'; 
import { Component, OnInit } from '@angular/core';
import { QuizDto } from 'src/app/features/dto/quiz.dto';

@Component({
  selector: 'app-display-all-quizes',
  templateUrl: './display-all-quizes.component.html',
  styleUrls: ['./display-all-quizes.component.scss'],
})
export class DisplayAllQuizesComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  quizzes: QuizDto[] = [];
  ngOnInit(){
  this.quizService.getAll().subscribe((quizzes) => {
      console.log(quizzes);
      this.quizzes = quizzes;
      console.log("Hello");
    });

  }

  // quizzes = [
  //   {
  //     title: 'Sample Quiz 1',
  //     description: 'This is a sample quiz description.',
  //     author: 'John Doe',
  //     creationDate: '2022-01-01', // Replace with a valid date string or Date object
  //     numOfQuestions: 10,
  //     likes: 25,
  //   },
  //   {
  //     title: 'Sample Quiz 2',
  //     description: 'Another sample quiz description.',
  //     author: 'Jane Doe',
  //     creationDate: '2022-02-01',
  //     numOfQuestions: 15,
  //     likes: 30,
  //   },
  //   {
  //     title: 'Sample Quiz 3',
  //     description: 'This is a sample quiz description.',
  //     author: 'John Doe',
  //     creationDate: '2022-01-01', // Replace with a valid date string or Date object
  //     numOfQuestions: 10,
  //     likes: 25,
  //   },
  //   {
  //     title: 'Sample Quiz 1',
  //     description: 'This is a sample quiz description.',
  //     author: 'John Doe',
  //     creationDate: '2022-01-01', // Replace with a valid date string or Date object
  //     numOfQuestions: 10,
  //     likes: 25,
  //   },
  //   {
  //     title: 'Sample Quiz 2',
  //     description: 'Another sample quiz description.',
  //     author: 'Jane Doe',
  //     creationDate: '2022-02-01',
  //     numOfQuestions: 15,
  //     likes: 30,
  //   },
  //   {
  //     title: 'Sample Quiz 3',
  //     description: 'This is a sample quiz description.',
  //     author: 'John Doe',
  //     creationDate: '2022-01-01', // Replace with a valid date string or Date object
  //     numOfQuestions: 10,
  //     likes: 25,
  //   },
  // ];
}
