import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Delete,
    BadRequestException,
    NotFoundException,
    Param,
    Query,
} from '@nestjs/common';
import {UsersService} from '../users.service';
import {CreateUserDto} from '../dto/create-user.dto';
import {UpdateUserDto} from '../dto/update-user.dto';
import {ApiBadRequestResponse, ApiCreatedResponse, ApiParam, ApiQuery, ApiTags} from '@nestjs/swagger';
import {IUser} from "../interface/users.interface";

@ApiTags('CRUD operations')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getUsers(): Promise<IUser[]> {
        return await this.usersService.getUsers();
    }

    @Get('/:userID')
    @ApiParam({name: 'userID'})
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    async getUser(@Param('userID') userID): Promise<IUser> {
        const user = await this.usersService.getUser(userID);
        if (!user) {
            throw new BadRequestException('User does not exists!');
        }
        return user;
    }

    @Post()
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    async createPost(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return await this.usersService.createUser(createUserDto);
    }

    @Put()
    @ApiQuery({name: 'userID'})
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    async updateUser(@Body() updateUserDto: UpdateUserDto, @Query('userID') userId): Promise<IUser> {
        const user = await this.usersService.updateUser(userId, updateUserDto);
        if (!user) throw new NotFoundException('User does not exists!');
        return user;
    }

    @Delete()
    @ApiQuery({name: 'userID'})
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    async deleteUser(@Query('userID') userID): Promise<IUser> {
        const user = await this.usersService.deleteUser(userID);
        if (!user) throw new NotFoundException('User does not exists!');
        return user;
    }
}
