import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayAllQuizesComponent } from './components/display-all-quizes/display-all-quizes.component';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';
import { QuizRoutingModule } from '../quiz/quiz-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
    DisplayAllQuizesComponent
  ],
  providers: [QuizService],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule,
    BrowserModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
