import { IsInt, IsNotEmpty } from 'class-validator';

export class DeletProduct {

    @IsNotEmpty({
        message: "El Id es requerido"
    })
    @IsInt()
    productID : number;
}