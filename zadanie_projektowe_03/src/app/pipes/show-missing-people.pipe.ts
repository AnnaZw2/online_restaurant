import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Pipe({
  name: 'filterMissingPeople'
})
export class ShowMissingPeoplePipe implements PipeTransform {

  transform(people: Person[], showOnlyMissing: boolean): Person[] {
    if (showOnlyMissing) {
      return people.filter(person => person.stillMissing);
    } else {
      return people;
    }
  }

}
