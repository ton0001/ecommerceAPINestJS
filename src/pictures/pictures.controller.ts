import { Controller, Get, Body, Post } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { CreatePictureDto } from './dtos/create-pic.dto';
import { PicturesService } from './pictures.service';

@Controller('pictures')
export class PicturesController {
    constructor(
        private picturesService: PicturesService,
        private productsService: ProductsService,
    ){}

    @Get()
    async findAll(){
        const resp = await this.picturesService.findAll();
        return resp;
    }

    @Post('/create')
    async createPic(@Body() body: any){
        const product = await this.productsService.findById(body.product)
        const resp = await this.picturesService.create(body.url, product)
        return resp;
    }

}
