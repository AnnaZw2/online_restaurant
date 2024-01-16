// add-person.guard.ts
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddPersonGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    const userRole = localStorage.getItem("role");
    console.log("Guard - User Role:", userRole);

    if (userRole === 'admin') {
      return true; // Allow access
    } else {
console.log("Guard - Access denied");
      return false;
    }
  }
}
