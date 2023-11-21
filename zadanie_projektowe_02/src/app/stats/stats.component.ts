import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnChanges {
@Input() arrayOfPeople: Person[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    this.arrayOfPeople = changes['arrayOfPeople'].currentValue;
  
    
  }

}
