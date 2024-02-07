import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateQuestionDto {
  @ApiProperty({
    description: 'Question',
    type: String,
    required: true,
    example: 'What is the capital of France?',
  })
  @IsString()
  @IsNotEmpty({ message: 'Question is required' })
  question: string;

  @ApiProperty({
    description: 'Correct Answer',
    type: String,
    required: true,
    example: 'Paris',
  })
  @IsString()
  @IsNotEmpty({ message: 'Field  is required' })
  correctAnswer: string;

  @ApiProperty({
    description: 'Option1 for answer',
    type: String,
    required: true,
    example: 'Warsaw',
  })
  @IsString()
  @IsNotEmpty({ message: 'Field  is required' })
  option1: string;

  @ApiProperty({
    description: 'Option2 for answer',
    type: String,
    required: true,
    example: 'London',
  })
  @IsString()
  @IsNotEmpty({ message: 'Field  is required' })
  option2: string;

  @ApiProperty({
    description: 'Option3 for answer',
    type: String,
    required: true,
    example: 'Berlin',
  })
  @IsString()
  @IsNotEmpty({ message: 'Field  is required' })
  option3: string;
}
