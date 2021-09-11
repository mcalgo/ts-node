import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity('ProductPurchase')
export class ProductPurchase{

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    ProductoParchaseID : number;

    @OneToOne(() => Product)
    @JoinColumn()
    ProductID: Product;

    @CreateDateColumn({
        name: 'PurchaseDate',
        type: 'timestamp',
        nullable: false
    })
    PurchaseDate : Date;

    @Column({
        type: 'nvarchar'
    })
    Total : string;
    
    @OneToOne(() => User)
    @JoinColumn()
    UserID: User
}