import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PersonService } from './services/personService';
import { Person } from './interfaces/person';
import {Gender} from './enums/custom-enums';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


 let examplePerson: Person = {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 25,
    gender: Gender.MALE,
    employed: true,
    studentStatus: false,
    address: {
      street: '123 Main St',
      apartmentNumber: 'Apt 4',
      zipCode: '12345',
      city: 'Example City',
      country: 'Example Country',
    },
    lastTimeSeen: new Date(),
    contact: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
  };

 
 let personService = new PersonService();
 personService.create(examplePerson);
 personService.create(examplePerson);
 personService.create(examplePerson);
 console.log(personService.read());