import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Products')
export class Product {

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id : number;

    @Column({
        type: 'nvarchar'
    })
    name: string;

    @Column({
        type: 'nvarchar'
    })
    category: string;

    @Column({
        type: 'nvarchar'
    })
    price: String;

    @Column({
        type: 'int',
        nullable : false,
        default: 0
    })
    quantity: number;
}