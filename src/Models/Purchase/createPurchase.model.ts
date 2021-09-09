import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Product } from "../../Entities/product.entity";
import { User } from "../../Entities/user.entity";

export class CreatePurchase {

    @IsNotEmpty({
        message: 'El id del producto es requerido'
    })
    @IsInt()
    ProductID: Product;

    @IsNotEmpty({
        message: 'La fecha es requerida'
    })
    @IsDate()
    PurchaseDate : Date;

    @IsNotEmpty({
        message: 'El total es requerido.'
    })
    @IsString()
    Total : string;

    @IsNotEmpty({
        message:  'El id del usuario es requerido.'
    })
    @IsInt()
    UserID: User
}