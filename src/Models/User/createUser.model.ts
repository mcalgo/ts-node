import { IsInt, IsNotEmpty, IsString, IsOptional, Length} from 'class-validator';

export class CreateUser {

    @IsNotEmpty({
        message: "El campo es nombre es requerido."
    })
    @Length(3, 100)
    @IsString()
    name: string;

    @IsOptional()
    @IsInt()
    money : number;
    
}