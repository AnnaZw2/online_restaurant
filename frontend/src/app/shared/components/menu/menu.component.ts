import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private userService:UserService, private router:Router) {}
  isMenuOpen = false;
  username = this.userService.getUsername();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
     this.userService.logout();
      this.router.navigate(['/home']);
 
  }

}
