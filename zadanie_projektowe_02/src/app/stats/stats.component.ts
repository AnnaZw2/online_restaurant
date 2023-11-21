import { Component, Input, OnChanges } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnChanges {
  @Input() arrayOfPeople: Person[] = [];
  missingPeople: Person[] = [];
  foundPeople: Person[] = [];

  ngOnChanges(): void {
    this.updateFilteredArrays();
  }

  private updateFilteredArrays(): void {
    this.missingPeople = this.arrayOfPeople.filter(
      (person: Person) => person.stillMissing
    );
    this.foundPeople = this.arrayOfPeople.filter(
      (person: Person) => !person.stillMissing
    );
  }
}
