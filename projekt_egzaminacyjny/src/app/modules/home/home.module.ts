import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayAllQuizesComponent } from './components/display-all-quizes/display-all-quizes.component';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';
import { QuizRoutingModule } from '../quiz/quiz-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from 'primeng/button';
import { ContolsPanelComponent } from './components/contols-panel/contols-panel.component';

@NgModule({
  declarations: [HomeComponent, DisplayAllQuizesComponent, ContolsPanelComponent,    
    ],
  providers: [QuizService],
  imports: [CommonModule, SharedModule, QuizRoutingModule, BrowserModule,CoreModule,  ButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
