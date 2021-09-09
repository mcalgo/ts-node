import { Request ,Response } from 'express';
import { CreateUser } from '../Models/User/createUser.model';
import { UpdateUser } from '../Models/User/updateUser.model';
import { UserService }  from '../Services/user.service'; 
import { Service } from 'typedi';


@Service()
export class UserController {

    constructor(
        private readonly userService: UserService        
    ){}


    getUsers(req: Request, res: Response ) { 

        const users = this.userService.findAllUsers();
        
        return res.json({
            data: users
        });
    };

    postUser(req: Request, res: Response){

        const newUser: CreateUser = req.body;
        const createUser = this.userService.CreateUser(newUser);
    
        return res.json({
            ok: true,
            new_user: createUser
        });    
    }

    getUser(req: Request, res: Response) {
    
        const { userID } = req.body;
    
        const user = this.userService.findOneUser(userID);
        
        return res.json({
            user: user
        });
    }

    putUser(req: Request, res: Response){

        const { userID } = req.body;
        const user: UpdateUser = req.body;
    
        const updateUser = this.userService.updateUser(userID, user);
    
        return res.json({
            updateUser
        });
    }

    deletUser(req: Request, res: Response) {

        const { userID } = req.body;
    
        const user = this.userService.deletUser(userID);

        return res.json({
            user
        });
    }
}

    


