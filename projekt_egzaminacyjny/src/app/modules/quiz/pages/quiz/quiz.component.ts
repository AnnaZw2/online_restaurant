import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateQuestionDto } from 'src/app/features/dto/create-question.dto';
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
  questions: CreateQuestionDto[] = [];


  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.quizService.getOne(this.quizId).subscribe((data) => {
      this.quiz = data;
      this.questions = this.shuffleAnswers(data.questions);
      console.log(this.questions);
    });
  }

  shuffleAnswers(questions: CreateQuestionDto[]): CreateQuestionDto[] {
    return questions.map((question) => {
      const options = [
        question.correctAnswer,
        question.option1,
        question.option2,
        question.option3,
      ].sort(() => Math.random() - 0.5);

      const answers = options.map((option, idx) => {
        return { answer: option, isCorrect: option === question.correctAnswer, index: idx, selected: false };
      })
      return { ...question, answers };
    });
  }
}
