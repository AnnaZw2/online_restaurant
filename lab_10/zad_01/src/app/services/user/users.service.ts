import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly localstorageKey = 'users';
  constructor() {}

  getUsers(): User[] | null {
    const userListString = localStorage.getItem(this.localstorageKey);
    return userListString ? JSON.parse(userListString) : [];
  }

  setUsers(users: User[]) {
    localStorage.setItem(this.localstorageKey, JSON.stringify(users));
  }
}
