import {Injectable} from '@nestjs/common';
import {IUser} from './interface/users.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    }

    async getUsers(): Promise<IUser[]> {
        const users = await this.userModel.find();
        return users;
    }

    async getUser(userID: string): Promise<IUser> {
        const user = await this.userModel.findById(userID);
        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const user = await new this.userModel(createUserDto);
        return await user.save();
    }

    async deleteUser(userID: string): Promise<IUser> {
        const delUser = await this.userModel.findByIdAndDelete(userID);
        return delUser;
    }

    async updateUser(userID: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const updetedUser = await this.userModel.findByIdAndUpdate(userID,
            updateUserDto, {new: true});
        return updetedUser;
    }
}
