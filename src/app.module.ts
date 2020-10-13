import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb://localhost/users-nest-tutorial', {
            useNewUrlParser: true
        })],
    controllers: [],
    providers: [],
})
export class AppModule {
}
