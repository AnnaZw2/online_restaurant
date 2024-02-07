import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contols-panel',
  templateUrl: './contols-panel.component.html',
  styleUrls: ['./contols-panel.component.scss']
})
export class ContolsPanelComponent {

  constructor(private router:Router) { 

  }
  navigateToCreateQuiz(): void {
    this.router.navigate(['/create-quiz']);
  }

}
