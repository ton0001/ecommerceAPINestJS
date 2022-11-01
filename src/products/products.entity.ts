import { Category } from "src/category/category.entity";
import { Picture } from "src/pictures/pictures.entity";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @OneToMany( () => Picture, (picture) => picture.product)
    pictures: Picture[]

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}