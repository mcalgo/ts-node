import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { PurchaseController } from "../Controllers/Purchase.controller";
import Cache from 'express-redis-cache'

/*
    Route: /api/purchase
*/

const router = Router();
const purchaseController : PurchaseController = Container.get(PurchaseController);
const cache = Cache();

router.route('/').get( purchaseController.getPurchases.bind(purchaseController), cache.route({ expire: 5000 }))
                 .post( purchaseController.postPurchase.bind(purchaseController)  );
router.route('/:purchase').get( purchaseController.getPurchase.bind(purchaseController), cache.route({ expire: 4000 }))
                          .put( purchaseController.putPurchase.bind(purchaseController) )
                          .delete( purchaseController.deletPurchase.bind(purchaseController) );

export default router;