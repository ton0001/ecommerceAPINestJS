import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UserService) {}

    async signin(name: string, password: string) {
        const user = await this.usersService.find(name);

        if(!user){
            throw new NotFoundException('user not found')
        }

        if(password !== user.password){
            throw new BadRequestException('wrong password')
        }
        return user;
    }


    async signup(name: string, password: string, role: string){
        const user = await this.usersService.find(name);

        if(user){
            throw new BadRequestException('name already in use');
        }

        const userCreated = await this.usersService.create(name, password, role)

        delete userCreated.password;

        return userCreated;
    }



}
