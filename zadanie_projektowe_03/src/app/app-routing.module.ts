
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { DetailsComponent } from './details/details.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { AdminGuard } from './guards/admin-guard';
import { AddPersonGuard } from './guards/add-person-guard';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { SuperAdminGuard } from './guards/super-admin-guard';



const routes: Routes = [
  { path: '', component: PersonListComponent, pathMatch: 'full' },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AdminGuard],
    canActivateChild: [SuperAdminGuard],
    children: [
      { path: 'edit', component: EditDetailsComponent},

    ],
  },
];

  // {path:'add', component:PersonFormComponent,canLoad: [AddPersonGuard],}


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
