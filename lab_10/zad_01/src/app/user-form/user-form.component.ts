import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/users.model';
import { FormService } from '../services/form/form.service';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  userList: User[] | null = [];
  constructor(
    private formService: FormService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formService.createUsersForm();
    this.userList = this.userService.getUsers();
  }
}
