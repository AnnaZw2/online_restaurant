import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question-container',
  templateUrl: './quiz-question-container.component.html',
  styleUrls: ['./quiz-question-container.component.scss'],
})
export class QuizQuestionContainerComponent  {
  @Input() question: any = null;



}
