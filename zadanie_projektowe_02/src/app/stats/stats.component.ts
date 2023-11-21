import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements DoCheck {
@Input() arrayOfPeople: Person[] = [];
missingPeople: Person[] = [];
foundPeople: Person[] = [];

ngDoCheck(): void {
  console.log('ngOnChanges');

  this.updateFilteredArrays();
}

private updateFilteredArrays(): void {
  console.log('ngOnChanges');

  this.missingPeople = this.arrayOfPeople.filter((person: Person) => person.stillMissing);
  this.foundPeople = this.arrayOfPeople.filter((person: Person) => !person.stillMissing);
}

}
