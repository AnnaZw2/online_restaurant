import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Pipe({
  name: 'filterFoundPeople'
})
export class ShowFoundPipe implements PipeTransform {

  transform(people: Person[]): Person[] {

      return people.filter(person => !person.stillMissing);
    
  }

}
