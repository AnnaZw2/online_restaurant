export interface CreateQuestionDto {
  readonly question: string;
  readonly correctAnswer: string;
  readonly option1: string;
  readonly option2: string;
  readonly option3: string;
}
