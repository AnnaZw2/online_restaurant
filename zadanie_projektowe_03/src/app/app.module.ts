import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ShowMissingPeoplePipe } from './pipes/show-missing-people.pipe';
import { StatsComponent } from './stats/stats.component';
import { CountElementsInArrayPipe } from './pipes/count-elements-in-array.pipe';
import { ShowFoundPipe } from './pipes/show-found.pipe';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { DisabledLinkDirective } from './directives/disabled-link-directive';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonFormComponent,
    ShowMissingPeoplePipe,
    StatsComponent,
    CountElementsInArrayPipe,
    ShowFoundPipe,
    ModalComponent,
    DetailsComponent,
    DisabledLinkDirective,
    EditDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule,   ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}