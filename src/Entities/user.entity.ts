import { Entity,  Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    userID: number;

    @Column({
        type: 'nvarchar',
        length: 100,
    })
    name: string;

    @Column({
        type: 'nvarchar',
    })
    money: number;    
}