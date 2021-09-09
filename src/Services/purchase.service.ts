import { Service } from "typedi";
import { getRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ProductPurchase } from "../Entities/productPurchase.entity";
import { CreatePurchase } from "../Models/Purchase/createPurchase.model";
import { UpdatePurchase } from "../Models/Purchase/updatePurchase.model";

@Service()
export class PurchaseService {
    private readonly purchaseRepo: Repository<ProductPurchase>

    constructor(
        @InjectRepository(ProductPurchase) purchaseRepo: Repository<ProductPurchase>
    ){
        this.purchaseRepo = purchaseRepo;
    }

    async findAllPurchase(){
        try {

            return await this.purchaseRepo.find();

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async findOnePurchase(id: number){
        try {

            const purchase = await this.purchaseRepo.findOne(id);

            if(!purchase) {
                return {
                    ok: false,
                    msg: 'purchase not found',
                }
            }

            return purchase;
            
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async CreatePurchase (body: CreatePurchase){
        try {

            const newUser = this.purchaseRepo.create({
                ProductID : body.ProductID,
                PurchaseDate : body.PurchaseDate,
                Total : body.Total,
                UserID : body.UserID
            });

            return await this.purchaseRepo.save(newUser);
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async updatePurchase(id: number, body: UpdatePurchase){
        try {
            
            const purchase = await this.purchaseRepo.findOne(id);

            if(purchase){

                getRepository(ProductPurchase).merge(purchase, body);

                const result = getRepository(ProductPurchase).save(purchase);

                return {
                    ok: true,
                    result
                }
            }

            return {
                ok: false,
                msg: "purchase not found"
            }

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async deletPurchase(id: number){
        try {
            
            const result = await this.purchaseRepo.delete(id);
            
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