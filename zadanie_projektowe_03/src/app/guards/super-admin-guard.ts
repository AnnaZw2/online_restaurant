// super-admin.guard.ts

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SuperAdminGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user has the necessary role to access the child routes
    const userRole = localStorage.getItem("role");

    if (userRole === 'super-admin') {
      return true; // Allow access to the child route
    } else {
      // Redirect to a different route or show an error message
      this.router.navigate(['/']);
      return false; // Deny access to the child route
    }
  }
}
