import { Request ,Response } from 'express';
import { Service } from 'typedi';
import { CreateProduct } from '../Models/Product/createProduct.model';
import { UpdateProduct } from '../Models/Product/updateProduct.model';
import { ProductService } from '../Services/product.service';

@Service()
export class ProductController{

    constructor(
        private readonly productService: ProductService
    ){}

    getProducts(req: Request, res: Response) {

        const products = this.productService.findAllProducts();

        return res.json({
            products: products
        });
    }

    getProduct(req: Request, res: Response){

        const { productID } = req.body;
        const user = this.productService.findOneProduct(productID);
        
        return res.json({
            user: user
        });
    }

    postProduct(req: Request, res: Response){

        const newProduct: CreateProduct = req.body;
        const createProduct = this.productService.CreateProduct(newProduct);
    
        return res.json({
            ok: true,
            new_user: createProduct
        }); 
    }

    putProduct(req: Request, res: Response){
        
        const { productID } = req.body;
        const product: UpdateProduct = req.body;
    
        const updateUser = this.productService.updateUser(productID, product);
    
        return res.json({
            updateUser
        });
    } 
    
    delectProduct(req: Request, res: Response){
        const { productID } = req.body;
    
        const product = this.productService.deletProduct(productID);

        return res.json({
            product
        });
    }
}