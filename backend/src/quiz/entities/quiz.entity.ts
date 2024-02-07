import { User } from '../../user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { QuizCategory } from './category.enum';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  likes: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column({ type: 'enum', enum: QuizCategory, default: QuizCategory.Other })
  category: QuizCategory;

  @ManyToOne(() => User, (user) => user.quizzes)
  author: User;

  @OneToMany(() => Question, (question) => question.quiz, {
    cascade: true,
    eager: true,
  })
  questions: Question[];
}
