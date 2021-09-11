"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../Services/user.service");
const typedi_1 = require("typedi");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers(req, res) {
        const users = this.userService.findAllUsers();
        return res.json({
            data: users
        });
    }
    ;
    postUser(req, res) {
        const newUser = req.body;
        const createUser = this.userService.CreateUser(newUser);
        return res.json({
            ok: true,
            new_user: createUser
        });
    }
    getUser(req, res) {
        const { userID } = req.body;
        const user = this.userService.findOneUser(userID);
        return res.json({
            user: user
        });
    }
    putUser(req, res) {
        const { userID } = req.body;
        const user = req.body;
        const updateUser = this.userService.updateUser(userID, user);
        return res.json({
            updateUser
        });
    }
    deletUser(req, res) {
        const { userID } = req.body;
        const user = this.userService.deletUser(userID);
        return res.json({
            user
        });
    }
};
UserController = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map