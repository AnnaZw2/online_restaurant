import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
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
  userList: User[] = [];
  constructor(
    private formService: FormService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formService.createUsersForm();
    this.userList = this.userService.getUsers();
  }

  get addressesControls(): FormArray {
    return this.userForm.controls['addresses'] as FormArray;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userList.push(this.userForm.value);
      this.userService.setUsers(this.userList);
      this.userForm.reset();
    }
  }

  addAddress(): void {
    this.formService.addAddress(this.userForm);
  }

  removeAddress(index: number): void {
    this.formService.removeAddress(this.userForm, index);
  }
}
