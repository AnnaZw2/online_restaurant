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

  @ManyToOne(() => User, (user) => user.quizzes)
  author: User;

  @OneToMany(() => Question, (question) => question.quiz, {
    cascade: true,
    eager: true,
  })
  questions: Question[];
}
