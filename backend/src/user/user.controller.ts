import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username/:password')
  @ApiOperation({
    summary: 'Find user by username and password',
    description: 'Find user by username and password',
  })
  @ApiParam({
    name: 'username',
    type: String,
    required: true,
    description: 'Username. Must be unique',
    example: 'John123',
  })
  @ApiParam({
    name: 'password',
    type: String,
    required: true,
    description: 'Password',
    example: 'myPassword123',
  })
  findOneByUsernameAndPassword(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    console.log('Searching for user with username:', username);
    console.log('Provided password:', password);
    return this.userService.findOneByUsernameAndPassword(username, password);
  }

  @Post()
  @ApiOperation({
    summary: 'Create user',
    description: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: CreateUserDto,
  })
  @ApiBody({
    type: CreateUserDto,
    description: 'Create user',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users from database',
  })
  @ApiResponse({
    status: 200,
    description: 'All users',
    type: [CreateUserDto],
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by id',
    description: 'Get user by id from database',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 400, description: 'Bad request (eg. invalid id)' })
  @ApiResponse({
    status: 200,
    description: 'The found user',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found user',
    type: CreateUserDto,
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'User id. Must be a valid ObjectId',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update user',
    description: 'Update user',
  })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
    type: UpdateUserDto,
  })
  @ApiBody({
    type: UpdateUserDto,
    description: 'Update user',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'User id. Must be a valid ObjectId',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete user',
    description: 'Delete user',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'User id. Must be a valid ObjectId',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
