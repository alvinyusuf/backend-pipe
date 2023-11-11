import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id });
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }

  findByUsename(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }
}
