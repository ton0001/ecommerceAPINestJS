import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private usersService: UserService,
    ){}

    @Get()
    async getAll(){
        return await this.usersService.getAll();
    }
}
