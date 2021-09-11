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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_entity_1 = require("../Entities/user.entity");
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userRepo.find();
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    findOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOne(id);
                if (!user) {
                    return {
                        ok: false,
                        msg: 'user not found',
                    };
                }
                return { user };
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    CreateUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = this.userRepo.create({
                    name: body.name,
                    money: body.money
                });
                return yield this.userRepo.save(newUser);
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    updateUser(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOne(id);
                if (user) {
                    typeorm_1.getRepository(user_entity_1.User).merge(user, body);
                    const result = typeorm_1.getRepository(user_entity_1.User).save(user);
                    return {
                        ok: true,
                        result
                    };
                }
                return {
                    ok: false,
                    msg: "user not found"
                };
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    deletUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userRepo.delete(id);
                return {
                    ok: true,
                    result
                };
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
};
UserService = __decorate([
    typedi_1.Service(),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map