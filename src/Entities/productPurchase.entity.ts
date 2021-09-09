import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity('ProductPurchase')
export class ProductPurchase{

    @PrimaryGeneratedColumn()
    ProductoParchaseID : number;

    @Column()
    @OneToOne(() => Product)
    ProductID: Product;

    @CreateDateColumn({
        name: 'PurchaseDate',
        type: 'timestamp',
        nullable: false
    })
    PurchaseDate : Date;

    @Column()
    Total : string;
    
    @Column()
    @OneToOne(() => User)
    UserID: User
}