import { UserService } from './../../../features/services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  constructor(
    private userSerivce: UserService,
  
  ){}
 
  username = '';
  password = '';
  errorMessage = ''
  
  signIn(){
     this.username = (<HTMLInputElement>document.getElementById('username')).value;
     this.password = (<HTMLInputElement>document.getElementById('password')).value;

    console.log(this.username);
    console.log(this.password);
    this.userSerivce.login(this.username,this.password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorMessage = "Invalid username or password!";
        console.log(error);
      }
    )

}
}