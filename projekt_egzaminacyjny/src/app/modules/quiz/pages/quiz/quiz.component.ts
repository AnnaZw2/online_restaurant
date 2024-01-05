import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizDto } from 'src/app/features/dto/quiz.dto';
import { QuizService } from 'src/app/features/services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}
  quizId = '';
  quiz: QuizDto | null = null;

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.quizService.getOne(this.quizId).subscribe((data) => {
        this.quiz = data
    });
    console.log(this.activatedRoute.snapshot.params['id']);
  }

}
