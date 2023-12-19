import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  status: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const statusValue = localStorage.getItem('status');
    this.status = statusValue === 'true';

    if (!this.status) {
      // Automatyczne przekierowanie, gdy status nie jest ustawiony
      this.router.navigate(['/set-status']);
    }
  }
}
