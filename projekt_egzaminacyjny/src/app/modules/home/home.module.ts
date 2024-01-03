import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayAllQuizesComponent } from './components/display-all-quizes/display-all-quizes.component';



@NgModule({
  declarations: [
    HomeComponent,
    DisplayAllQuizesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
