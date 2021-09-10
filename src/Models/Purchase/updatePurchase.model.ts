import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Product } from "../../Entities/product.entity";
import { User } from "../../Entities/user.entity";

export class UpdatePurchase {

    @IsOptional()
    @IsInt()
    ProductID: Product;

    @IsOptional()
    @IsDate()
    PurchaseDate : Date;

    @IsOptional()
    @IsString()
    Total : string;

    @IsOptional()
    @IsInt()
    UserID: User
}