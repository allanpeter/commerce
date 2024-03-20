import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/find-last')
  async findLast(): Promise<User> {
    return this.userService.findLastUser();
  }

  @Get('/name/:name')
  async findByName(@Param('name') name: string): Promise<User> {
    return this.userService.findUserByName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(Number(id));
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(Number(id));
  }

  @Get('zip/:zip')
  async verifyZip(@Param('zip') zip: string) {
    const validate = this.userService.verifyZipCode(zip);
    return validate;
  }
}
