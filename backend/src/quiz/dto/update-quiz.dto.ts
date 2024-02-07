import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDto } from './create-quiz.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @ApiProperty({
    title: 'New title',
    description: 'New title for quiz',
    type: String,
    required: false,
  })
  title?: string;

  @ApiProperty({
    title: 'New description',
    description: 'New description for quiz',
    type: String,
    required: false,
  })
  description?: string;

  @ApiProperty({
    title: 'Updated number of likes likes',
    description: 'Updated number of likes for quiz',
    type: Number,
    required: false,
  })
  likes?: number;
}
