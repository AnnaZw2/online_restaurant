import { Component, EventEmitter, Output } from '@angular/core';
import { Gender } from 'src/shared/enums/custom-enums';
import { Person, generateUUID } from 'src/shared/interfaces/person';
import { nonInitializedPerson } from 'src/shared/utils/nonInitPerson';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
 @Output()  addPerson = new EventEmitter<Person>();
person:Person = nonInitializedPerson
  

  onSubmit() {
    this.addPerson.emit(this.person);
    this.person = {  // Clear the form after submission
      id: generateUUID(),
      name: '',
      surname: '',
      age: 0,
      gender: Gender.NOT_SET,
      city: '',
      lastTimeSeen: new Date(),
      stillMissing: false,
    };
  }
}
