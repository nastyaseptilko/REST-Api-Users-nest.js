import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './controller/users.controller';
import {MongooseModule} from '@nestjs/mongoose'
import {UserSchema} from './schemas/users.schemas'

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'User', schema: UserSchema}
    ])],
    providers: [UsersService],
    controllers: [UsersController]
})

export class UsersModule {
}
