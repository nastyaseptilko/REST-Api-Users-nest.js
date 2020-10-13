import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('Users API')
        .setVersion('1.0')
        .setDescription('There is a possibility to view, add, delete, change the user.')
        .setContact('Anastasiya Septilko', 'http://localhost:3000/users/', 'anastasiyaseptilko@gmail.com')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}

bootstrap();
