import {Document} from 'mongoose';

export interface IUser extends Document {
    id: string;
    firstName: string;
    lastName?: string;
    age: number;
    hobbies: string[];
}
