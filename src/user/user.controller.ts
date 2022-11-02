import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(
        private usersService: UserService,
        private authService: AuthService
    ){}

    @Post('/register')
    async register(@Body() body: CreateUserDto){
        console.log(body)
        const user = await this.authService.signup(body.name, body.role, body.password);
        return user
    }

    @Post('/login')
    async login (@Body() body: LoginUserDto){
        const user = await this.authService.signin(body.name, body.password)

        if(!user){
            throw new NotFoundException('user not found')
        }

        return user;
    }


    @Get()
    async getAll(){
        return await this.usersService.getAll();
    }
}
