import { answer } from './../../models/answer.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question-container',
  templateUrl: './quiz-question-container.component.html',
  styleUrls: ['./quiz-question-container.component.scss'],
})
export class QuizQuestionContainerComponent  {
  @Input() question: any = null;
@Input() submitted = false;  
  onAnswerSelected(question: any, selectedAnswer: any): void {
    question.answers.forEach((answer: any) => {
      answer.selected = false; // Reset all other answers
    });
    selectedAnswer.selected = true; // Set the selected answer

 
  }

}
