import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up-button',
  templateUrl: './sing-up-button.component.html',
  styleUrls: ['./sing-up-button.component.scss']
})
export class SingUpButtonComponent {
  constructor(private router:Router){}
  redirectTo(path:string){
    this.router.navigate([path]);
  }
}
