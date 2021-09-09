import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Product } from "../../Entities/product.entity";
import { User } from "../../Entities/user.entity";

export class UpdatePurchase {

    @IsOptional({
        message: 'El id del producto es requerido'
    })
    @IsInt()
    ProductID: Product;

    @IsOptional({
        message: 'La fecha es requerida'
    })
    @IsDate()
    PurchaseDate : Date;

    @IsOptional({
        message: 'El total es requerido.'
    })
    @IsString()
    Total : string;

    @IsOptional({
        message:  'El id del usuario es requerido.'
    })
    @IsInt()
    UserID: User
}