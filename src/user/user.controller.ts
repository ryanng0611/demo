import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('createUser')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  // GET endpoint that retrieves a list of all users from the service
  // @UseGuards(AuthGuard)
  @Get('findAllUsers')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException(
        `User with username "${username}" not found.`,
      );
    }
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }

  @Post('deleteUsers/:ids') // Assuming IDs are separated by a delimiter (e.g., comma)
  async removeMultiple(@Param('ids') idsString: string) {
    try {
      // Convert the comma-separated string to an array of numbers
      const userIdList = idsString.split(',').map(Number);

      // Call your service method with the list of userIds
      await this.usersService.removeMultiple(userIdList);

      return; // No explicit return value needed for void methods
    } catch (error) {
      // Handle errors appropriately (e.g., logging, throwing error)
      console.error(error);
      throw error; // You might want to customize error handling and response
    }
  }
}
