import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CreateQuizFormComponent } from './components/create-quiz-form/create-quiz-form.component';


const quizRoutes: Routes = [
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'create-quiz/:quizId', component: CreateQuizFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(quizRoutes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

