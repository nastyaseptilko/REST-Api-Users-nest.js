import {Schema} from 'mongoose'

export const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    hobbies: Array
})
