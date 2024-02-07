import { UserService } from 'src/app/features/services/user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private userService:UserService) {

  }

  isAuthentiticated(): boolean {
    return this.userService.isAuthenticated();
  }
   

  }



