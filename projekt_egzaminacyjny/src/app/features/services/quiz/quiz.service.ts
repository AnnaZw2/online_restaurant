import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/core/constants/api_url';

import { Observable } from 'rxjs';
import { QuizDto } from '../../dto/quiz.dto';
import { CreateQuizDto } from '../../dto/create-quiz.dto';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quiz_api_url = API_URL + 'quizzes';
  constructor(private http: HttpClient) {}

  getAll(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(this.quiz_api_url);
  }

  getOne(id: string): Observable<QuizDto> {
    const quiz = this.http.get<QuizDto>(`${this.quiz_api_url}/${id}`)
    console.log(quiz);
    return this.http.get<QuizDto>(`${this.quiz_api_url}/${id}`);
  }

  create(quiz: CreateQuizDto): Observable<CreateQuizDto> {
    return this.http.post<CreateQuizDto>(this.quiz_api_url, quiz);
  }
}
