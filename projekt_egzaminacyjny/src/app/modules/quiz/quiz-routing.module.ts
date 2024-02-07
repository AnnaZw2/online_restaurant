import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';


const quizRoutes: Routes = [
  { path: 'quiz/:id', component: QuizComponent },

];

@NgModule({
  imports: [RouterModule.forChild(quizRoutes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

