import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';

const quizRoutes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: QuizResultComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(quizRoutes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

