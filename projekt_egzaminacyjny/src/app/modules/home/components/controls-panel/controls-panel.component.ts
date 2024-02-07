import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss']
})
export class ControlsPanelComponent {

  constructor(private router:Router) {
  
   }

   navigateToCreateQuiz() {
    this.router.navigate(['/create-quiz']);
}

}
