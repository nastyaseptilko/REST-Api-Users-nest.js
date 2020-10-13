import {ApiProperty} from '@nestjs/swagger';
import {ArrayMinSize, IsNumber, IsString, Length, Max, Min} from "class-validator";

export class UpdateUserDto {
    @ApiProperty({description: 'This is the user\'s first name'})
    @IsString()
    @Length(1, 20)
    firstName?: string;

    @ApiProperty({description: 'This is the user\'s last name'})
    @IsString()
    @Length(1, 30)
    lastName?: string;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    @Max(120)
    age?: number;

    @ApiProperty()
    @ArrayMinSize(1)
    hobbies?: string[];
}


