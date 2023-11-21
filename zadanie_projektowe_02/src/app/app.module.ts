import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ShowMissingPeoplePipe } from './pipes/show-missing-people.pipe';
import { ModalComponent } from './modal/modal.component';
import { StatsComponent } from './stats/stats.component';
import { CountElementsInArrayPipe } from './pipes/count-elements-in-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonFormComponent,
    ShowMissingPeoplePipe,
    ModalComponent,
    StatsComponent,
    CountElementsInArrayPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
