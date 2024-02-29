import { CreateQuizDto } from "./create-quiz.dto";

export interface UserDTO {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly quizzes?: CreateQuizDto[];
   }