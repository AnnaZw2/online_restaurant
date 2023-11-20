import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';
import { nonInitializedPerson } from 'src/shared/utils/nonInitPerson';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
 @Input() person:Person = nonInitializedPerson

}
