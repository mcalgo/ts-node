"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUser = exports.putUser = exports.getUser = exports.postUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../Entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const USERS = yield typeorm_1.getRepository(User_1.User).find();
        return res.json(USERS);
    });
}
exports.getUsers = getUsers;
;
function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        try {
            const emailExit = yield typeorm_1.getRepository(User_1.User)
                .createQueryBuilder("user")
                .where("user.email = :email", { email: newUser.email })
                .getOne();
            if (emailExit) {
                return res.status(201).json({
                    ok: false,
                    msg: "El email ya se encuentra creado"
                });
            }
            //Encriptación de contraseña
            const salt = bcrypt_1.default.genSaltSync();
            const newPass = bcrypt_1.default.hashSync(newUser.password, salt);
            newUser.password = newPass;
            const createUser = typeorm_1.getRepository(User_1.User).create(newUser);
            const result = yield typeorm_1.getRepository(User_1.User).save(createUser);
            return res.status(201).json({
                ok: true,
                msg: result
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error
            });
        }
    });
}
exports.postUser = postUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const USER = yield typeorm_1.getRepository(User_1.User).findOne(req.params.user_id);
            return res.status(200).json({
                ok: true,
                msg: USER
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error
            });
        }
    });
}
exports.getUser = getUser;
function putUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield typeorm_1.getRepository(User_1.User).findOne(req.params.user_id);
            if (user) {
                typeorm_1.getRepository(User_1.User).merge(user, req.body);
                const result = typeorm_1.getRepository(User_1.User).save(user);
                return res.status(200).json({
                    ok: true,
                    result
                });
            }
            return res.status(404).json({
                ok: true,
                msg: "user not found"
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: error
            });
        }
    });
}
exports.putUser = putUser;
function deletUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) {
        }
    });
}
exports.deletUser = deletUser;
//# sourceMappingURL=user.controller.js.map