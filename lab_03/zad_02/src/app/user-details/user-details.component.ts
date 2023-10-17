import { Component } from '@angular/core';
import {user} from './user'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  public getName(): string{
    return "My name is " + user.firstName + " " + user.lastName
  }
}
