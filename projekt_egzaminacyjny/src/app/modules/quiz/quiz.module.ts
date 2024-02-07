import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { QuizQuestionContainerComponent } from './components/quiz-question-container/quiz-question-container.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { CreateQuizFormComponent } from './components/create-quiz-form/create-quiz-form.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [
        QuizComponent,
        QuizQuestionContainerComponent,
        CreateQuizComponent,
        CreateQuizFormComponent
    ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        SharedModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        DropdownModule
    ]
})
export class QuizModule { }
