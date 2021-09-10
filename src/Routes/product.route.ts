import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { ProductController } from "../Controllers/Product.controller";

/*
    Route: /api/product
*/

const router = Router();
const productController : ProductController = Container.get(ProductController);

router.route('/').get( productController.getProducts.bind(productController) )
                 .post( productController.postProduct.bind(productController)  );
router.route('/:productid').get( productController.getProduct.bind(productController) )
                        .put( productController.putProduct.bind(productController) )
                        .delete( productController.deletProduct.bind(productController) );

export default router;