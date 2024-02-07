import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { label: 'My Profile', icon: 'pi pi-user' },
    { label: 'My Quizzes', icon: 'pi pi-list' },
    { label: 'Sign Out', icon: 'pi pi-sign-out' }
  ];
}
