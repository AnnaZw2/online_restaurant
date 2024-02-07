import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    QuizModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
