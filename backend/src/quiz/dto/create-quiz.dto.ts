import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsEnum,
} from 'class-validator';
import { QuizCategory } from '../entities/category.enum';
export class CreateQuizDto {
  @ApiProperty({
    description: 'Title',
    type: String,
    required: true,
    example: 'Capitals',
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({
    description: 'Description',
    type: String,
    required: true,
    example: 'Quiz about capitals in Europe',
  })
  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({
    description: 'Likes',
    type: Number,
    example: 0,
    default: 0,
  })
  @IsNumber()
  likes: number = 0;

  @ApiProperty({
    description: 'Creation date',
    type: Date,
    example: new Date(),
    default: new Date(),
  })
  @IsDate()
  creationDate: Date;

  @ApiProperty({
    description: 'Category',
    enum: QuizCategory,
    example: QuizCategory.Science,
  })
  @IsEnum(QuizCategory, { message: 'Invalid category' })
  category: QuizCategory;

  @ApiProperty({
    description: 'Author Email',
    type: String,
    example: 'john@example.com',
  })
  @IsString()
  @IsNotEmpty({ message: 'Author email is required' })
  authorEmail: string;

  @ApiProperty({
    description: 'Author Creation Date',
    type: Date,
    example: new Date(),
    default: new Date(),
  })
  @IsDate()
  quizCreationDate: Date;

  constructor() {
    if (!this.creationDate) {
      this.creationDate = new Date();
    }
  }
}
