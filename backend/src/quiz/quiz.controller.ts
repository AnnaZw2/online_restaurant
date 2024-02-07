import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

@ApiTags('Quizzes')
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @ApiOperation({
    summary: 'Create quiz',
    description: 'Create quiz and add its id to users array of quizzes',
  })
  @ApiResponse({
    status: 201,
    description: 'The quiz has been successfully created.',
    type: CreateQuizDto,
  })
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all quizzes',
    description: 'Get all quizzes from database',
  })
  @ApiResponse({
    status: 200,
    description: 'All quizzes',
    type: [CreateQuizDto],
  })
  findAll() {
    console.log('find all');
    console.log(this.quizService.findAll());
    return this.quizService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get quiz by id',
    description: 'Get quiz by id from database',
  })
  @ApiResponse({
    status: 200,
    description: 'The found quiz',
    type: CreateQuizDto,
  })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  @ApiResponse({ status: 400, description: 'Bad request (eg. invalid id)' })
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Get(':id/questions')
  @ApiOperation({
    summary: 'Get all questions and answers for quiz',
    description: 'Get all questions and answers for quiz for specified id',
  })
  @ApiParam({
    name: 'id',
    description: 'Quiz id. Must be a valid ObjectId',
    type: Number,
    required: true,
    example: new ObjectId(),
  })
  @ApiResponse({
    status: 200,
    description: 'All questions and answers for quiz',
    type: [CreateQuizDto],
  })
  getAllQuestionsAndAnswers(@Param('id') id: string) {
    return this.quizService.getAllQuestionsAndAnswers(+id);
  }

  @Post(':id/questions')
  @ApiOperation({
    summary: 'Add question to quiz',
    description: 'Add question to quiz for specified id',
  })
  @ApiParam({
    name: 'id',
    description: 'Quiz id. Must be a valid ObjectId',
    type: Number,
    required: true,
    example: new ObjectId(),
  })
  @ApiResponse({
    status: 200,
    description: 'Question added to quiz',
    type: [CreateQuizDto],
  })
  @ApiBody({
    description: 'Question',
    type: CreateQuizDto,
  })
  addQuestionToQuiz(@Param('id') id: string, @Body() questionDto: any) {
    return this.quizService.addQuestionToQuiz(+id, questionDto);
  }

  @Post(':id/questions-multiple')
  @ApiOperation({
    summary: 'Add multiple questions to quiz',
    description: 'Add multiple questions to quiz for specified id',
  })
  @ApiParam({
    name: 'id',
    description: 'Quiz id. Must be a valid ObjectId',
    type: Number,
    required: true,
    example: new ObjectId(),
  })
  @ApiResponse({
    status: 200,
    description: 'Questions added to quiz',
    type: [CreateQuizDto],
  })
  @ApiBody({
    description: 'Array of questions',
    type: [CreateQuizDto],
  })
  addQuestionsToQuiz(@Param('id') id: string, @Body() questionsDto: any) {
    return this.quizService.addQuestionsToQuiz(+id, questionsDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update quiz',
    description: 'Update quiz for specified id',
  })
  @ApiParam({
    name: 'id',
    description: 'Quiz id. Must be a valid ObjectId',
    type: Number,
    required: true,
    example: new ObjectId(),
  })
  @ApiResponse({
    status: 200,
    description: 'Quiz updated',
    type: [CreateQuizDto],
  })
  @ApiBody({
    description: 'Quiz',
    type: CreateQuizDto,
  })
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete quiz',
    description: 'Delete quiz for specified id',
  })
  @ApiParam({
    name: 'id',
    description: 'Quiz id. Must be a valid ObjectId',
    type: Number,
    required: true,
    example: new ObjectId(),
  })
  @ApiResponse({
    status: 200,
    description: 'Quiz deleted',
    type: [CreateQuizDto],
  })
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }
}
