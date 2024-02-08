import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';


const quizRoutes: Routes = [
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'create-quiz/:quizId', component: CreateQuizComponent }

];

@NgModule({
  imports: [RouterModule.forChild(quizRoutes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

