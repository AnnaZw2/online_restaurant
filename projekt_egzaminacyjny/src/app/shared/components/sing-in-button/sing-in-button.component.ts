import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in-button',
  templateUrl: './sing-in-button.component.html',
  styleUrls: ['./sing-in-button.component.scss']
})
export class SingInButtonComponent {
constructor(private router:Router){}
  redirectTo(path:string){
    this.router.navigate([path]);
  }
}
