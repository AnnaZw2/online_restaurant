import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async findOneByUsernameAndPassword(username: string, password: string) {
    console.log('Searching for user with username:', username);
    console.log('Provided password:', password);
    return await this.userRepository.findOne({
      where: {
        username,
        password,
      },
    });
  }
  async create(createUserDto: CreateUserDto) {
    const { username, email } = createUserDto;

    const existingUser = await this.userRepository.findOne({
      where: { username, email },
    });

    if (existingUser) {
      if (existingUser.username === username && existingUser.email === email) {
        throw new ConflictException('Username and email must be unique');
      }

      if (existingUser.username === username) {
        throw new ConflictException('Username must be unique');
      }

      if (existingUser.email === email) {
        throw new ConflictException('Email must be unique');
      }
    }

    // If no existing user is found, proceed with creating the new user
    try {
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
