import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../features/services/user/user.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup;
  errorMessage = '';

  @ViewChild('passwordInput') passwordInput!: HTMLInputElement;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }

    const username = this.signInForm.get('username')?.value;
    const password = this.signInForm.get('password')?.value;

    this.userService.login(username, password).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.errorMessage = 'Invalid username or password!';
        console.error(error);
      }
    );
  }
}