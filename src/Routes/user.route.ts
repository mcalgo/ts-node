import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { UserController } from "../Controllers/user.controller";
import Cache from 'express-redis-cache'

/*
    Route: /api/user
*/

const router = Router();
const userController: UserController = Container.get(UserController)
const cache = Cache();

router.route('/')
                .get( userController.getUsers.bind(userController), cache.route({ expire: 5000 }) )
                 .post( userController.postUser.bind(userController) );
router.route('/:UserId').get( userController.getUser.bind(userController), cache.route({ expire: 4000 }) )
                        .put( userController.putUser.bind(userController) )
                        .delete( userController.deletUser.bind(userController) );

export default router;
