import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor (@InjectRepository(User) private repo: Repository<User>){}

    async create(name: string, role: string, password: string) {
        const user = await this.repo.create({name, role, password})
        return this.repo.save(user);
    }
    
    find(name: string) {
        return this.repo.findOneBy({name})
    }

    getAll() {
        return this.repo.find({})
    }
}
