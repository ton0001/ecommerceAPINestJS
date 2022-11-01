import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { PicturesService } from 'src/pictures/pictures.service';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private productsService: ProductsService,
        private categoriesService: CategoryService,
    ){}

    @Get()
    async findAll(){
        const resp = await this.productsService.findAll();
        return resp;
    }

    @Post('/create')
    async createProduct(@Body() body: any){
        const category = await this.categoriesService.findOneById(body.categoryId);
        const resp = await this.productsService.create(body.name, body.price, category)
        return resp;
    }

    @Get('/:id')
    async getPicId(@Param() param:any){
        return await this.productsService.findById(param.id);
    }

}
