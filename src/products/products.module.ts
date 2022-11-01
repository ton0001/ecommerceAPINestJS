import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { PicturesModule } from 'src/pictures/pictures.module';
import { CategoryModule } from 'src/category/category.module';


@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})

export class ProductsModule {}
