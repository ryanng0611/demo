import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // GET endpoint that retrieves a list of all users from the service
  // @UseGuards(AuthGuard)
  @Get('findAllUsers')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // @Get(':username')
  // async findOne(@Param('username') username: string): Promise<User> {
  //   const user = await this.usersService.findOne(username);
  //   if (!user) {
  //     throw new NotFoundException(`User with username "${username}" not found.`);
  //   }
  //   return user;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
