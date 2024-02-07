import { CreateQuestionDto } from './create-question.dto';
import { CategoryEnum } from './category.enum';
export interface CreateQuizDto {
  readonly title: string;
  readonly description: string;
  readonly category: CategoryEnum; 
  readonly authorUsername: string;
  readonly authorEmail: string;
  readonly quizCreationDate: Date;
  readonly likes: number;
  readonly creationDate: Date;
  readonly questions: CreateQuestionDto[];
}