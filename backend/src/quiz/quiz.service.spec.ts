import { QuizService } from './quiz.service';
import { TestingModule, Test } from '@nestjs/testing';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Question } from './entities/question.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UpdateQuizDto } from './dto/update-quiz.dto';

describe('QuizService', () => {
  let quizRepository: Repository<Quiz>;
  let questionRepository: Repository<Question>;
  let quizService: QuizService;
  const objectId = new ObjectId();

  const mockUser = {
    id: parseInt(objectId.toString(), 16),
    username: 'username',
    email: 'email',
    password: 'password',
    quizzes: [],
  };
  const mockQuiz: Quiz = {
    id: parseInt(objectId.toString(), 16),
    title: 'Quiz title',
    description: 'Quiz description',
    likes: 0,
    creationDate: new Date(),
    author: mockUser as any,
    questions: [],
  };

  const mockQuestion: Question = {
    id: parseInt(objectId.toString()),
    question: 'Question',
    correctAnswer: 'Correct answer',
    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    quiz: mockQuiz,
  };

  mockQuiz.questions.push(mockQuestion);
  mockUser.quizzes.push(mockQuiz);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        {
          provide: getRepositoryToken(Quiz),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Question),
          useClass: Repository,
        },
      ],
    }).compile();

    quizRepository = module.get<Repository<Quiz>>(getRepositoryToken(Quiz));
    questionRepository = module.get<Repository<Question>>(
      getRepositoryToken(Question),
    );
    quizService = module.get<QuizService>(QuizService);
  });
  it('should be defined', () => {
    expect(quizRepository).toBeDefined();
    expect(questionRepository).toBeDefined();
  });

  describe('createQuiz', () => {
    it('should create a new quiz', async () => {
      quizRepository.create = jest.fn().mockReturnValue(mockQuiz);
      quizRepository.save = jest.fn().mockResolvedValue(mockQuiz);
      const result = await quizRepository.save(mockQuiz);
      expect(result).toEqual(mockQuiz);
    });
  });

  describe('findAll', () => {
    it('should return an array of quizzes', async () => {
      const quiz = new Quiz();
      quizRepository.find = jest.fn().mockResolvedValue([quiz]);
      const result = await quizRepository.find();
      expect(result).toEqual([quiz]);
    });

    it('should return an empty array', async () => {
      quizRepository.find = jest.fn().mockResolvedValue([]);
      const result = await quizRepository.find();
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a quiz', async () => {
      quizRepository.findOne = jest.fn().mockResolvedValue(mockQuiz);
      const result = await quizRepository.findOne({
        where: { id: mockQuiz.id },
      });
      expect(result).toEqual(mockQuiz);
    });

    it('should throw an error if quiz does not exist', async () => {
      quizRepository.findOne = jest.fn().mockResolvedValue(null);
      await expect(
        quizService.findOne(mockQuiz.id),
      ).rejects.toThrowErrorMatchingSnapshot();
    });
    it('should throw an error for an invalid id format', async () => {
      jest
        .spyOn(quizRepository, 'findOne')
        .mockRejectedValue(new BadRequestException('Invalid ID format'));

      await expect(
        quizService.findOne(123),
      ).rejects.toThrowErrorMatchingSnapshot();
    });
  });

  describe('update', () => {
    it('should update a quiz', async () => {
      const updateQuizDto: UpdateQuizDto = {
        title: 'Updated Title',
        description: 'Updated Description',
      };

      // Mocking the update method to return the updated quiz
      quizRepository.update = jest.fn().mockResolvedValue({
        affected: 1, // Assuming one record was affected
      });

      const result = await quizService.update(mockQuiz.id, updateQuizDto);

      expect(quizRepository.update).toHaveBeenCalledWith(
        mockQuiz.id,
        updateQuizDto,
      );

      expect(result).toEqual({
        affected: 1,
      });
    });
  });

  describe('remove', () => {
    it('should delete a quiz', async () => {
      quizRepository.delete = jest.fn().mockResolvedValue({
        affected: 1,
      });

      const result = await quizService.remove(mockQuiz.id);

      expect(quizRepository.delete).toHaveBeenCalledWith(mockQuiz.id);
      expect(result).toEqual({
        affected: 1,
      });
    });
  });

  describe('getAllQuestionsAndAnswers', () => {
    it('should return questions for a valid quiz ID', async () => {
      // Mocking the findOne method to return a quiz with questions
      quizRepository.findOne = jest.fn().mockResolvedValue({
        id: mockQuiz.id,
        title: mockQuiz.title,
        questions: [
          {
            id: 1,
            question: 'Question 1',
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
            correctAnswer: 'Correct Answer 1',
          },
        ],
      });

      const result = await quizService.getAllQuestionsAndAnswers(mockQuiz.id);

      // Verify that the findOne method was called with the correct arguments
      expect(quizRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockQuiz.id },
        relations: ['questions'],
      });

      expect(result).toEqual([
        {
          id: 1,
          question: 'Question 1',
          correctAnswer: 'Correct Answer 1',
          option1: 'Option 1',
          option2: 'Option 2',
          option3: 'Option 3',
        },
      ]);
    });

    it('should throw NotFoundException for an invalid quiz ID', async () => {
      quizRepository.findOne = jest.fn().mockResolvedValue(null);

      // Use the expect.assertions to ensure that the assertions in the test are executed
      expect.assertions(1);

      try {
        await quizService.getAllQuestionsAndAnswers(123);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('addQuestionToQuiz', () => {
    it('should add a new question to a valid quiz ID', async () => {
      quizRepository.findOneBy = jest.fn().mockResolvedValue({
        id: mockQuiz.id,
        title: mockQuiz.title,
      });

      questionRepository.create = jest.fn().mockReturnValue({
        id: mockQuestion.id,
        question: 'Question',
        correctAnswer: 'Correct answer',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        quiz: {
          id: mockQuiz.id,
          title: mockQuiz.title,
        },
      });

      questionRepository.save = jest.fn().mockReturnValue({
        id: mockQuestion.id,
        question: 'Question',
        correctAnswer: 'Correct answer',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        quiz: {
          id: mockQuiz.id,
          title: mockQuiz.title,
        },
      });

      const result = await quizService.addQuestionToQuiz(
        mockQuiz.id,
        mockQuestion,
      );

      expect(quizRepository.findOneBy).toHaveBeenCalledWith({
        id: mockQuiz.id,
      });

      expect(questionRepository.create).toHaveBeenCalledWith({
        id: mockQuestion.id,
        question: 'Question',
        correctAnswer: 'Correct answer',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        quiz: {
          id: mockQuiz.id,
          title: mockQuiz.title,
        },
      });
      expect(questionRepository.save).toHaveBeenCalledWith({
        id: mockQuestion.id,
        question: 'Question',
        correctAnswer: 'Correct answer',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        quiz: {
          id: mockQuiz.id,
          title: mockQuiz.title,
        },
      });

      expect(result).toEqual({
        id: mockQuestion.id,
        question: 'Question',
        correctAnswer: 'Correct answer',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        quiz: {
          id: mockQuiz.id,
          title: mockQuiz.title,
        },
      });
    });
    it('should throw NotFoundException for an invalid quiz ID', async () => {
      quizRepository.findOneBy = jest.fn().mockResolvedValue(null);

      expect.assertions(1);

      try {
        await quizService.addQuestionToQuiz(123, mockQuestion);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
