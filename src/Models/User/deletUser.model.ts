import { IsNotEmpty } from "class-validator";

export class DeletUser {
    
    @IsNotEmpty({
        message: "El Id es requerido"
    })
    userID: number;
}