import { Router } from "express";
import { Container } from "typeorm-typedi-extensions";
import { UserController } from "../Controllers/user.controller";

/*
    Route: /api/user
*/

const router = Router();
const userController: UserController = Container.get(UserController)

router.route('/')
                .get( userController.getUsers.bind(userController) )
                 .post( userController.postUser.bind(userController) );
router.route('/:UserId').get( userController.getUser.bind(userController) )
                        .put( userController.putUser.bind(userController) )
                        .delete( userController.deletUser.bind(userController) );

export default router;
