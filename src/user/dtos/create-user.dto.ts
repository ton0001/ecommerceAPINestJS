import {IsString,} from 'class-validator'

export class CreateUserDto{
    @IsString()
    name: string

    @IsString()
    role: string;

    @IsString()
    password: string;
}