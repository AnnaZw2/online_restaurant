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
  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    // Use query builder to load the quiz entity with its related questions
    const quiz = await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'questions')
      .where('quiz.id = :id', { id })
      .getOne();

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    // Update properties of the quiz entity if they exist in the updateQuizDto
    if (updateQuizDto.title) {
      quiz.title = updateQuizDto.title;
    }
    if (updateQuizDto.description) {
      quiz.description = updateQuizDto.description;
    }
    if (updateQuizDto.likes !== undefined) {
      quiz.likes = updateQuizDto.likes;
    }
    if (updateQuizDto.category) {
      quiz.category = updateQuizDto.category;
    }

    // Save the updated quiz entity
    const updatedQuiz = await this.quizRepository.save(quiz);

    return updatedQuiz;
  }

  async remove(id: number) {
    // Find the quiz
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    // Delete associated questions
    await Promise.all(
      quiz.questions.map(async (question) => {
        await this.questionRepository.delete(question.id);
      }),
    );

    // Delete the quiz
    await this.quizRepository.delete(id);
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
