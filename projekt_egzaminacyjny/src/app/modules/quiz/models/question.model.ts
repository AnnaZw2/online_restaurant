import { Answer } from './answer.model';

export interface Question {
  readonly answers: Answer[];
  readonly id: string;
  readonly question: string;
  readonly correctAnswer: string;
  readonly option1: string;
  readonly option2: string;
  readonly option3: string;
}
