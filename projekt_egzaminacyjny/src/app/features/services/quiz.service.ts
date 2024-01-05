import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/core/constants/api_url';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quiz_api_url = API_URL + "/quizzes";
  constructor(private http: HttpClient) {}

  getQuzzes() {
    return this.http.get(this.quiz_api_url);
  }
}
