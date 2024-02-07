import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    description: 'Username',
    type: String,
    required: true,
    example: 'John123',
  })
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty({
    description: 'Email',
    type: IsEmail,
    required: true,
    example: 'john123@mail.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
    required: true,
    example: 'myPassword123',
  })
  @IsString()
  password: string;
}
