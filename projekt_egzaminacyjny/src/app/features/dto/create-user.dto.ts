import { CreateQuizDto } from "./create-quiz.dto";

export interface CreateUserDTO {
   readonly username: string;
   readonly email: string;
   readonly password: string;
   readonly quizzes?: CreateQuizDto[];
  }