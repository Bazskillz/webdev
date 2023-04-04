import { Body, Controller, Post, Get, Param, HttpException, HttpStatus} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<User> {
        if (await this.usersService.usernameExists(username)){
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            username,
            hashedPassword,
        );
        return result;
    }

    // @Post('/un_check')
    // async check_username(@Body('check_name')check_name: string): Promise<Boolean> {

    //     const result = await this.usersService.usernameExists(check_name);
    //     return result

    // }
}