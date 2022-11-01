import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
    constructor (@InjectRepository(Category) private repo: Repository<Category>,){}
    
    async findOneById(id: number) {
        return await this.repo.findOneBy({id})
    }

    async create(body: CreateCategoryDto) {
        const category = this.repo.create(body);
        return this.repo.save(category);
    }

    async findAll() {
        return this.repo.find({})
    }
}
