import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, updateUserDto: Partial<User>): Promise<User>;
    delete(id: number): Promise<void>;
    verifyZipCode(zip: string): Promise<boolean>;
}
