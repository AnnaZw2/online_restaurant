import { CreateQuestionDto } from './create-question.dto';

export interface CreateQuizDto {
  readonly title: string;
  readonly description: string;
  readonly likes: number;
  readonly creationDate: Date;
  readonly questions: CreateQuestionDto[];
}
