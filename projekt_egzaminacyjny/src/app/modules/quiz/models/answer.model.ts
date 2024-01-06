export interface Answer {
  readonly id: string;
  readonly answer: string;
  readonly isCorrect: boolean;
  selected: boolean;
  correctClass: string;
}
