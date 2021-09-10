import { Service } from "typedi";
import { Request ,Response } from 'express';
import { PurchaseService } from "../Services/purchase.service";
import { CreatePurchase } from "../Models/Purchase/createPurchase.model";
import { UpdatePurchase } from "../Models/Purchase/updatePurchase.model";

@Service()
export class PurchaseController{
    constructor(
        private readonly purchaseService : PurchaseService
    ){}

    getPurchases(req: Request, res: Response){
        const purchase = this.purchaseService.findAllPurchase();
        return res.json({
            purchase: purchase
        });
    }

    getPurchase(req: Request, res: Response){

        const { purchaseID } = req.body;
        const user = this.purchaseService.findOnePurchase(purchaseID);
        
        return res.json({
            user: user
        });

    }

    postPurchase(req: Request, res: Response){

        const newPurchase: CreatePurchase = req.body;
        const createProduct = this.purchaseService.CreatePurchase(newPurchase);
    
        return res.json({
            ok: true,
            new_user: createProduct
        }); 
    }

    putPurchase(req: Request, res: Response){

        const { purchaseID } = req.body;
        const purchase: UpdatePurchase = req.body;
    
        const updateUser = this.purchaseService.updatePurchase(purchaseID, purchase);
    
        return res.json({
            updateUser
        });
    } 
    
    delectPurchase(req: Request, res: Response){

        const { purchaseID } = req.body;
    
        const user = this.purchaseService.deletPurchase(purchaseID);

        return res.json({
            user
        });
    }
}