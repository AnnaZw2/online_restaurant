import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { QuizModule } from './quiz/quiz.module';
import { Quiz } from './quiz/entities/quiz.entity';
import { Question } from './quiz/entities/question.entity';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: process.env.NODE_ENV === 'test' ? 3308 : 3307, // Use test database port when in test environment
      username: 'nestjs',
      password: 'nestjs',
      database: process.env.NODE_ENV === 'test' ? 'nestjs_test' : 'nestjs', // Use test database name when in test environment
      entities: [User, Quiz, Question],
      synchronize: true,
    }),
    UserModule,
    QuizModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
