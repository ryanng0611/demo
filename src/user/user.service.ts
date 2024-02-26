import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// export type User = User;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        username: createUserDto.username,
        password: createUserDto.password,
      })
      .execute();
  }

  // find and retrieve an array of empty User objects
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  // findOne(userId: number): Promise<User | null> {
  //   return this.usersRepository.findOneBy({ userId });
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.username = :username', { username })
      .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        username: updateUserDto.username,
        password: updateUserDto.password,
      })
      .where('userId = :userId', { userId: id })
      .execute();
  }
}
