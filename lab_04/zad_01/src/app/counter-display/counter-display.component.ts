import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.sass']
})
export class CounterDisplayComponent {
 
  @Input() counter: number = 0;
}
