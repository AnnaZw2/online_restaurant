
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { DetailsComponent } from './details/details.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { AdminGuard } from './guards/admin-guard';



const routes: Routes = [
  { path: '', component: PersonListComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AdminGuard] },
  {path:'add', component:PersonFormComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
