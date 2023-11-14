import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent {
  public counter;
  constructor() {
    this.counter = 0; 
  }
public interval: any;
  increment(){
   this.counter++;
  }
  decrement(){
    this.counter--;
  }

  reset(){
    this.counter= 0
  }

  start(){
   this.interval= setInterval(() => {
      this.increment();
    }, 1000);
  }

  stop(){
    clearInterval(this.interval)

  }


}
