import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/category.entity';
import { Picture } from 'src/pictures/pictures.entity';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    findAll() {
        return this.repo.find({
            select: {
                id: true,
                name: true,
                price: true,
                pictures: true,
            }
        })
    }
    create(name: string, price: number, category: Category) {
        const product = this.repo.create({name, price})
        product.category = category
        //product.pictures[0] = pic;

        return this.repo.save(product);
    }

    constructor (@InjectRepository(Product) private repo: Repository<Product>) {}


    findById(id: number){
        return this.repo.findOneBy({id})
    }
}
