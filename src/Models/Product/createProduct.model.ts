import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProduct {

    @IsNotEmpty({
        message: "El nombre del producto es requerido."
    })
    @Length(3, 100)
    @IsString()
    name: string;

    @IsNotEmpty({
        message: "la categotia es requerida."
    })
    @IsString()
    category : string;

    @IsNotEmpty({
        message: "El precio es requerido."
    })
    @IsInt()
    price: String;

    @IsNotEmpty({
        message: "La cantidad es requerida."
    })
    @IsInt()
    quantity: number;

    
}