import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { QuizQuestionContainerComponent } from './components/quiz-question-container/quiz-question-container.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        QuizComponent,
        QuizQuestionContainerComponent
    ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        SharedModule,
        CheckboxModule,
        FormsModule
    ]
})
export class QuizModule { }
