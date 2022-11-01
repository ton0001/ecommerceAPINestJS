import { Product } from "src/products/products.entity";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, ManyToOne } from "typeorm";

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => Product, (product) => product.pictures)
    product: Product;
}