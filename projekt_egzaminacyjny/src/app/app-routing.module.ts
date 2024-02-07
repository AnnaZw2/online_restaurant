import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { SignInComponent } from './core/pages/sing-in/sing-in.component';
import { SingUpComponent } from './core/pages/sing-up/sing-up.component';
import { CreateQuizComponent } from './modules/quiz/pages/create-quiz/create-quiz.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"sing-in", component: SignInComponent},
  {path:"sing-up", component: SingUpComponent},
  {path:"create-quiz",component:CreateQuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
