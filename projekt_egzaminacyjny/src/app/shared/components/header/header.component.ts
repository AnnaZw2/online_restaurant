import { UserService } from '../../../features/services/user/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private userService: UserService) {}

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }
}
