import { Entity,  Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    userID: number;

    @Column()
    name: string;

    @Column()
    money: number;    
}