import { IsNotEmpty } from "class-validator";

export class DelectPurchase {
    
    @IsNotEmpty()
    ProductoParchaseID : number;
}