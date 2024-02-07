import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  create(createQuizDto: CreateQuizDto) {
    const newQuiz = this.quizRepository.create(createQuizDto);
    console.log('newQuiz', newQuiz);

    return this.quizRepository.save(newQuiz);
  }

  findAll() {
    return this.quizRepository.find({ relations: ['author'] });
  }

  async findOne(id: number) {
    try {
      const quiz = await this.quizRepository.findOne({
        where: { id },
        relations: ['author'],
      });

      this.validateQuizExists(quiz);
      return quiz;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return this.quizRepository.update(id, updateQuizDto);
  }

  remove(id: number) {
    return this.quizRepository.delete(id);
  }

  async getAllQuestionsAndAnswers(quizId: number) {
    const quiz = await this.quizRepository.findOne({
      where: { id: quizId },
      relations: ['questions'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    return quiz.questions;
  }
  //add a single question to a quiz at once
  async addQuestionToQuiz(quizId: number, questionDto: CreateQuestionDto) {
    const quiz = await this.quizRepository.findOneBy({ id: quizId });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    const newQuestion = this.questionRepository.create({
      ...questionDto,
      quiz,
    });

    await this.questionRepository.save(newQuestion);

    return newQuestion;
  }

  //add multiple questions to a quiz at once by passing an array of questions
  async addQuestionsToQuiz(quizId: number, questionsDto: CreateQuestionDto[]) {
    const quiz = await this.quizRepository.findOneBy({ id: quizId });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    const newQuestions = questionsDto.map((questionDto) =>
      this.questionRepository.create({ ...questionDto, quiz }),
    );

    await this.questionRepository.save(newQuestions);

    return newQuestions;
  }

  public validateId(id: string): void {
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      throw new BadRequestException('Invalid ID format');
    }
  }

  public validateQuizExists(quiz: Quiz): void {
    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }
  }
}
