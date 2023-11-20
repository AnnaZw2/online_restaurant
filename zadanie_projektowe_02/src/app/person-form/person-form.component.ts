import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Gender } from 'src/shared/enums/custom-enums';
import { Person, generateUUID } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
 

  person:Person = {
    id: '',
    name: '',
    surname: '',
    age: 0,
    gender: Gender.NOT_SET, 
    city: '',
    lastTimeSeen: new Date(),
    stillMissing: undefined,
  }
}
