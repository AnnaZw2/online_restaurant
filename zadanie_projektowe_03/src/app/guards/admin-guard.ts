// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  canActivate(): boolean {
   
      if (localStorage.getItem("role") === 'admin') {
        return true; 
      } else {
    
        return false;
      }
    
  }
}