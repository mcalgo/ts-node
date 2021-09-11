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
exports.CreatePurchase = void 0;
const class_validator_1 = require("class-validator");
const product_entity_1 = require("../../Entities/product.entity");
const user_entity_1 = require("../../Entities/user.entity");
class CreatePurchase {
}
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'El id del producto es requerido'
    }),
    class_validator_1.IsInt(),
    __metadata("design:type", product_entity_1.Product)
], CreatePurchase.prototype, "ProductID", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'La fecha es requerida'
    }),
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], CreatePurchase.prototype, "PurchaseDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'El total es requerido.'
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePurchase.prototype, "Total", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'El id del usuario es requerido.'
    }),
    class_validator_1.IsInt(),
    __metadata("design:type", user_entity_1.User)
], CreatePurchase.prototype, "UserID", void 0);
exports.CreatePurchase = CreatePurchase;
//# sourceMappingURL=createPurchase.model.js.map