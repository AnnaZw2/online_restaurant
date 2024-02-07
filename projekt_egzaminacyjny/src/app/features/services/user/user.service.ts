import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/core/constants/api_url';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { catchError, map } from 'rxjs/operators';
import { UserDTO } from '../../dto/user.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private quiz_api_url = API_URL + 'users';
  constructor(private http: HttpClient, private router: Router) {}

  create(user: CreateUserDTO): Observable<CreateUserDTO> {
    return this.http.post<CreateUserDTO>(this.quiz_api_url, user);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  getCurrentUser(): { username: string; email: string } | null {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (username && email) {
      return { username, email };
    }
    return null;
  }
  getUsername(): string | null {
    return localStorage.getItem('username') || null;
  }

  login(username: string, password: string): Observable<UserDTO> {
    return this.http
      .get<UserDTO>(`${this.quiz_api_url}/${username}/${password}`)
      .pipe(
        map((response: UserDTO) => {
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('isLogged', 'true');

          this.navigateToHome();
          return response;
        }),
        catchError((error) => {
          // console.error('Login failed:', error);
          return throwError('Invalid data');
        })
      );
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('isLogged');
    this.router.navigate(['/sing-in']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }
}
