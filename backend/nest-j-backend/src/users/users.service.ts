import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(username: string, password: string): Promise<User> {
        return this.userModel.create({
            username,
            password,
        });
    }
    async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }
    async usernameExists(username: string ): Promise<Boolean> {
        const user = await this.getUser({ username });
        if (!user) {
            return false
        } else {
            return true;
        }
    }

}