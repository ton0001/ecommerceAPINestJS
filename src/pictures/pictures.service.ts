import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/products.entity';
import { ProductsService } from 'src/products/products.service';
import { EntityManager, Repository } from 'typeorm';
import { CreatePictureDto } from './dtos/create-pic.dto';
import { Picture } from './pictures.entity';

@Injectable()
export class PicturesService {
    constructor (@InjectRepository(Picture) private repo: Repository<Picture>) {}
    

    findAll(){
        return this.repo.find({
            // select: {
            //     id: true,
            //     url: true,
            //     product: true,
            // }
        })
    }

    findById(id: number){
        return this.repo.findOneBy({id})
    }

    create(url: string, product: Product){
        const picture = this.repo.create({url});
        picture.product = product;
        return this.repo.save(picture);
    }

}
