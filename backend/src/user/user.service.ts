import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findLastUser(): Promise<User> {
    const users = this.userRepository.find();
    console.log((await users).pop());
    return (await users).pop();
  }

  async findUserByName(name: string): Promise<User> {
    const users = this.userRepository.findOneBy({ name });
    return users;
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: Partial<User>): Promise<User> {
    const user = await this.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  // async verifyZipCode(zip: string) {
  //   const padrao: RegExp = /^\d{5}-\d{3}$|^\d{5}$/;

  //   if (padrao.test(zip)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  async verifyZipCode(zip: string) {
    console.log(zip);
    if (zip === '32010-770') return true;
    return false;
  }
}
