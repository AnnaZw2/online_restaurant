import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: 'set-status', component: StatusComponent },
  { path: 'data', component: DataComponent },
  { path: '', redirectTo: '/set-status', pathMatch: 'full' },

  { path: '**', redirectTo: '/set-status' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
