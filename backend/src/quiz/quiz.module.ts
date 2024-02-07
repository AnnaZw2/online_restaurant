import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
