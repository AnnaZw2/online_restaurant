// super-admin.guard.ts

import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SuperAdminGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(): boolean {
  
    const userRole = localStorage.getItem("role");

    if (userRole === 'super-admin') {
      return true;
    } else {
 
      this.router.navigate(['/']);
      return false; // Deny access to the child route
    }
  }
}
