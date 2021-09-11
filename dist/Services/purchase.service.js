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
exports.PurchaseService = void 0;
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const productPurchase_entity_1 = require("../Entities/productPurchase.entity");
let PurchaseService = class PurchaseService {
    constructor(purchaseRepo) {
        this.purchaseRepo = purchaseRepo;
    }
    findAllPurchase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.purchaseRepo.find();
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    findOnePurchase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield this.purchaseRepo.findOne(id);
                if (!purchase) {
                    return {
                        ok: false,
                        msg: 'purchase not found',
                    };
                }
                return purchase;
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    CreatePurchase(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = this.purchaseRepo.create({
                    ProductID: body.ProductID,
                    PurchaseDate: body.PurchaseDate,
                    Total: body.Total,
                    UserID: body.UserID
                });
                return yield this.purchaseRepo.save(newUser);
            }
            catch (error) {
                return {
                    ok: false,
                    msg: error
                };
            }
        });
    }
    updatePurchase(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield this.purchaseRepo.findOne(id);
                if (purchase) {
                    typeorm_1.getRepository(productPurchase_entity_1.ProductPurchase).merge(purchase, body);
                    const result = typeorm_1.getRepository(productPurchase_entity_1.ProductPurchase).save(purchase);
                    return {
                        ok: true,
                        result
                    };
                }
                return {
                    ok: false,
                    msg: "purchase not found"
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
    deletPurchase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.purchaseRepo.delete(id);
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
PurchaseService = __decorate([
    typedi_1.Service(),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(productPurchase_entity_1.ProductPurchase)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map