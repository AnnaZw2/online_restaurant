import { Component, Input } from '@angular/core';
import { Answer } from '../../models/answer.model';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz-question-container',
  templateUrl: './quiz-question-container.component.html',
  styleUrls: ['./quiz-question-container.component.scss'],
})
export class QuizQuestionContainerComponent {
  @Input() question: Question = {} as Question;
  @Input() submitted = false;
  onAnswerSelected(question: Question, selectedAnswer: Answer): void {
    console.log(selectedAnswer);
    console.log(question);
    question.answers.forEach((answer: Answer) => {
      answer.selected = false; // Reset all other answers
    });
    selectedAnswer.selected = true; 
  }
}
