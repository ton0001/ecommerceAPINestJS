import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {

    constructor (private categoryService: CategoryService,){}

    @Post('/create')
    create(@Body() body: CreateCategoryDto){
        return this.categoryService.create(body)
    }

    @Get()
    findAll(){
        return this.categoryService.findAll();
    }
}
