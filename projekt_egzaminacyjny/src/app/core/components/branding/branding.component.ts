import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent {
constructor(private router: Router){}
  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
