import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  quiz = 
    {
      title: 'Sample Quiz 1',
      description: 'This is a sample quiz description.',
      author: 'John Doe',
      creationDate: '2022-01-01', // Replace with a valid date string or Date object
      numOfQuestions: 10,
      likes: 25,
    }
}
