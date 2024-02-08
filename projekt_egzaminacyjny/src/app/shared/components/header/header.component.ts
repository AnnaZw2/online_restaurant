import { UserService } from '../../../features/services/user/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router,private quizService: QuizService, private userService: UserService) {}

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }




}
