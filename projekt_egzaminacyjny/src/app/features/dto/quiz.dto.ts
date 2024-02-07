import { CategoryEnum } from "./category.enum";
import { CreateQuestionDto } from "./create-question.dto";

export interface QuizDto {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly likes: number;
    readonly creationDate: Date;
    readonly questions: CreateQuestionDto[];
    readonly author : {
        readonly id: string;
        readonly username: string;
        readonly email: string;
        readonly password: string;
        readonly creationDate: Date;
    }
    readonly category: CategoryEnum;
  }
  