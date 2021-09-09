import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateUser { 

    @IsNotEmpty({
        message: "El Id es requerido"
    })
    @IsInt()
    userID: number;

    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsInt()
    money : number;
}