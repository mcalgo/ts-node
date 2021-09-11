"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Purchase_controller_1 = require("../Controllers/Purchase.controller");
/*
    Route: /api/purchase
*/
const router = express_1.Router();
const purchaseController = typeorm_typedi_extensions_1.Container.get(Purchase_controller_1.PurchaseController);
router.route('/').get(purchaseController.getPurchases.bind(purchaseController))
    .post(purchaseController.postPurchase.bind(purchaseController));
router.route('/:purchase').get(purchaseController.getPurchase.bind(purchaseController))
    .put(purchaseController.putPurchase.bind(purchaseController))
    .delete(purchaseController.deletPurchase.bind(purchaseController));
exports.default = router;
//# sourceMappingURL=purchase.route.js.map