import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "src/products/products.controller";
import { ProductsModule } from "src/products/products.module";
import { ProductsService } from "src/products/products.service";
import { PicturesController } from "./pictures.controller";
import { Picture } from "./pictures.entity";
import { PicturesService } from "./pictures.service";


@Module({
    imports: [TypeOrmModule.forFeature([Picture]), ProductsModule],
    controllers: [PicturesController],
    providers: [
      PicturesService,
    ],
  })
export class PicturesModule {}