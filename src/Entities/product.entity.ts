import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Products')
export class Product {

    @PrimaryGeneratedColumn()
    productID : number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    price: String;

    @Column({
        type: 'int',
        nullable : false,
        default: 0
    })
    quantity: number;
}