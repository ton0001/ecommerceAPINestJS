import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PicturesService } from './pictures/pictures.service';
import { PicturesController } from './pictures/pictures.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Picture } from './pictures/pictures.entity';
import { PicturesModule } from './pictures/pictures.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Picture, Product, Category],
    synchronize: true
  }),
  PicturesModule,
  ProductsModule,
  CategoryModule,
  UserModule
   
  ],
  // controllers: [AppController, ProductsController],
  // providers: [AppService],
  // controllers: [AppController, PicturesController],
  // providers: [AppService, PicturesService],
  controllers: [AppController, UserController],
  providers: [AppService]
})
export class AppModule {}
