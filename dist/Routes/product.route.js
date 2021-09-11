"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Product_controller_1 = require("../Controllers/Product.controller");
/*
    Route: /api/product
*/
const router = express_1.Router();
const productController = typeorm_typedi_extensions_1.Container.get(Product_controller_1.ProductController);
router.route('/').get(productController.getProducts.bind(productController))
    .post(productController.postProduct.bind(productController));
router.route('/:productid').get(productController.getProduct.bind(productController))
    .put(productController.putProduct.bind(productController))
    .delete(productController.deletProduct.bind(productController));
exports.default = router;
//# sourceMappingURL=product.route.js.map