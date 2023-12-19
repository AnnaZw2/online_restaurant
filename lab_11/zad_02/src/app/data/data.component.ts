import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  status: boolean;

  constructor(private router: Router) {
    const statusValue = localStorage.getItem('status');
    this.status = statusValue === 'true';
  }

  redirectToStatusPage() {
    this.router.navigate(['/set-status']);
  }
}
