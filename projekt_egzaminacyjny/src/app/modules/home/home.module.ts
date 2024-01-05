import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayAllQuizesComponent } from './components/display-all-quizes/display-all-quizes.component';
import { QuizService } from 'src/app/features/services/quiz.service';
import { QuizRoutingModule } from '../quiz/quiz-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DisplayAllQuizesComponent
  ],
  providers: [QuizService],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
