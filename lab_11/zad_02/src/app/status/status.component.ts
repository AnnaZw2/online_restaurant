import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  constructor(private router: Router) { }

  setTrue() {
    localStorage.setItem('status', 'true');
  }

  clearStatus() {
    localStorage.removeItem('status');
  }
}
