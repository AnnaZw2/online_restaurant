import { Question } from "./question.model";

export interface Quiz {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly likes: number;
    readonly creationDate: Date;
    readonly questions: Question[];
}