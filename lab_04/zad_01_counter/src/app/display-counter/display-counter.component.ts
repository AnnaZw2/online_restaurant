import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  standalone: true,
  imports: [],
  templateUrl: './display-counter.component.html',
  styleUrl: './display-counter.component.scss'
})
export class DisplayCounterComponent {

  @Input() currentCount = 0;
}
