import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';


//Routes
import UserRoutes from './Routes/user.route';
import PurchaseRoutes from './Routes/purchase.route';
import ProductRoutes from './Routes/product.route';

export class App {

    private app:Application

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    connectDB(){
        createConnection();
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use('/api/user', UserRoutes);
        this.app.use('/api/purchase', PurchaseRoutes)
        this.app.use('/api/products', ProductRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log("server online");
    }
    
}