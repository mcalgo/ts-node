import { Service } from "typedi";
import { getRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Product } from "../Entities/product.entity";
import { CreateProduct } from "../Models/Product/createProduct.model";
import { UpdateProduct } from "../Models/Product/updateProduct.model";

@Service()
export class ProductService {

    private productRepo: Repository<Product>;

    constructor(
        @InjectRepository(Product) productRepo: Repository<Product>
    ){
        this.productRepo = productRepo;
    }

    async findAllProducts(){

        try {

            return await this.productRepo.find();
            
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async findOneProduct(id: number){

        try {

            const user = await this.productRepo.findOne(id);

            if(!user) {
                return {
                    ok: false,
                    msg: 'product not found',
                }
            }

            return user;

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async CreateProduct(body: CreateProduct){
        try {

            const newProduct = this.productRepo.create({
                name : body.name,
                category : body.category,
                price : body.price,
                quantity : body.quantity
            });

            return await this.productRepo.save(newProduct);

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async updateUser(id: number, body: UpdateProduct){

        try {

            const product = await this.productRepo.findOne(id);

            if(product){

                getRepository(Product).merge(product, body);

                const result = getRepository(Product).save(product);

                return {
                    ok: true,
                    result
                }
            }

            return {
                ok: false,
                msg: "product not found"
            }
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }

    }

    async deletProduct(id: number){
        try {
            
            const result = await this.productRepo.delete(id);
            return {
                ok: true,
                result
            }

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }  
    }
}