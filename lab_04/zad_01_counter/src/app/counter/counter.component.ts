import { Component } from '@angular/core';
import { DisplayCounterComponent } from '../display-counter/display-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [DisplayCounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  currentCount = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interval: any;
  incrementCounter() {
    this.currentCount++;
    this.interval = setInterval(() => {
      this.currentCount++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.interval);
  }

  resetCounter() {
    this.currentCount = 0;
    clearInterval(this.interval);
  }
}
