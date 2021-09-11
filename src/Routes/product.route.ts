import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { ProductController } from "../Controllers/Product.controller";
import Cache from 'express-redis-cache'


/*
    Route: /api/product
*/

const router = Router();
const productController : ProductController = Container.get(ProductController);
const cache = Cache();

router.route('/').get( productController.getProducts.bind(productController), cache.route({ expire: 5000 }) )
                 .post( productController.postProduct.bind(productController)  );
router.route('/:productid').get( productController.getProduct.bind(productController), cache.route({ expire: 4000 }) )
                        .put( productController.putProduct.bind(productController) )
                        .delete( productController.deletProduct.bind(productController) );

export default router;