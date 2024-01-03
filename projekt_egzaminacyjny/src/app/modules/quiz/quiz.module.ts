import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { SharedModule } from "../../shared/shared.module";
import { QuizQuestionContainerComponent } from './components/quiz-question-container/quiz-question-container.component';



@NgModule({
    declarations: [
        QuizComponent,
        QuizResultComponent,
        QuizQuestionContainerComponent
    ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        SharedModule
    ]
})
export class QuizModule { }
