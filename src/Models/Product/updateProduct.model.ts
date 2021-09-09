import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProduct  {

    @IsNotEmpty({
        message: "El Id es requerido"
    })
    @IsInt()
    productID : number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    category : string;

    @IsOptional()
    @IsString()
    price: String;

    @IsOptional()
    @IsInt()
    quantity: number;
}