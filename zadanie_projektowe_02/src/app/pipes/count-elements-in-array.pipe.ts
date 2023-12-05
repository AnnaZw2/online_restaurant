import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Pipe({
  name: 'countElementsInArray'
})
export class CountElementsInArrayPipe implements PipeTransform {

  transform(array: Person[]): number {
    return array.length;
  }

}
