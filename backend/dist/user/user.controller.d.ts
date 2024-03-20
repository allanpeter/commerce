import { UserService } from './UserService';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, updateUserDto: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>;
    verifyZip(zip: string): Promise<boolean>;
}
