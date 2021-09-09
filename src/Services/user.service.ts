import { User } from '../Entities/user.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateUser } from '../Models/User/createUser.model';
import { UpdateUser } from '../Models/User/updateUser.model';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { DeletUser } from '../Models/User/deletUser.model';

@Service()
export class UserService {

    private readonly userRepo: Repository<User>;

    constructor(
        @InjectRepository(User) userRepo: Repository<User>        
    ){
        this.userRepo = userRepo;
    }
    
    async findAllUsers(){

        try {

            return await this.userRepo.find();
            
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }
    
    async findOneUser(id: number){

        try {

            const user = await this.userRepo.findOne(id);

            if(!user) {
                return {
                    ok: false,
                    msg: 'user not found',
                }
            }

            return {user};

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async CreateUser(body: CreateUser){
        try {

            const newUser = this.userRepo.create({
                name: body.name,
                money : body.money
            });

            return await this.userRepo.save(newUser);

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async updateUser(id: number, body: UpdateUser){

        try {

            const user = await this.userRepo.findOne(id);

            if(user){
                getRepository(User).merge(user, body);

                const result = getRepository(User).save(user);

                return {
                    ok: true,
                    result
                }
            }

            return {
                ok: false,
                msg: "user not found"
            }
        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }

    async deletUser(id: DeletUser) {

        try {
            
            const result = await this.userRepo.delete(id);
            return {
                ok: true,
                result
            }

        } catch (error) {
            return {
                ok: false,
                msg: error
            }
        }
    }
}

