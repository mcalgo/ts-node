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

        let retries = 5; 

        while (retries) {
            try {
                createConnection({
                    type: "postgres",
                    host: "db",
                    port: 5432,
                    username: "postgres",
                    password: "postgres",
                    database: "node-ts",
                    entities: [
                        __dirname + "src/Entities/*.entity.ts"
                    ],
                    synchronize: true,
                });    
            } catch (error) {
                console.log(error) 
                retries -= 1;
                console.log(`retries left: ${retries}`);
                new Promise(res => setTimeout(res, 5000)); 
            }
        }
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