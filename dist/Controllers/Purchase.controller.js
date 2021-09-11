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
exports.PurchaseController = void 0;
const typedi_1 = require("typedi");
const purchase_service_1 = require("../Services/purchase.service");
let PurchaseController = class PurchaseController {
    constructor(purchaseService) {
        this.purchaseService = purchaseService;
    }
    getPurchases(req, res) {
        const purchase = this.purchaseService.findAllPurchase();
        return res.json({
            purchase: purchase
        });
    }
    getPurchase(req, res) {
        const { purchaseID } = req.body;
        const user = this.purchaseService.findOnePurchase(purchaseID);
        return res.json({
            user: user
        });
    }
    postPurchase(req, res) {
        const newPurchase = req.body;
        const createProduct = this.purchaseService.CreatePurchase(newPurchase);
        return res.json({
            ok: true,
            new_user: createProduct
        });
    }
    putPurchase(req, res) {
        const { purchaseID } = req.body;
        const purchase = req.body;
        const updateUser = this.purchaseService.updatePurchase(purchaseID, purchase);
        return res.json({
            updateUser
        });
    }
    deletPurchase(req, res) {
        const { purchaseID } = req.body;
        const purchase = this.purchaseService.deletPurchase(purchaseID);
        return res.json({
            purchase
        });
    }
};
PurchaseController = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], PurchaseController);
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=Purchase.controller.js.map