import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { PurchaseController } from "../Controllers/Purchase.controller";

/*
    Route: /api/purchase
*/

const router = Router();
const purchaseController : PurchaseController = Container.get(PurchaseController);

router.route('/').get( purchaseController.getPurchases.bind(purchaseController) )
                 .post( purchaseController.postPurchase.bind(purchaseController)  );
router.route('/:purchase').get( purchaseController.getPurchase.bind(purchaseController) )
                          .put( purchaseController.putPurchase.bind(purchaseController) )
                          .delete( purchaseController.delectPurchase.bind(purchaseController) );

export default router;