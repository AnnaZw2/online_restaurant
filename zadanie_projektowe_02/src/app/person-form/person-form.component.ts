import { Component } from '@angular/core';
import { Gender } from 'src/shared/enums/custom-enums';
import { Person, generateUUID } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
 

  person:Person = {
    id:  generateUUID(),
    name: '',
    surname: '',
    age: 0,
    gender: Gender.NOT_SET, 
    city: '',
    lastTimeSeen: new Date(),
    stillMissing: undefined,
  }
  onSubmit() {
    console.log(this.person);
  }
}
