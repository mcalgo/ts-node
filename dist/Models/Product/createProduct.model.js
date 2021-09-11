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
exports.CreateProduct = void 0;
const class_validator_1 = require("class-validator");
class CreateProduct {
}
__decorate([
    class_validator_1.IsNotEmpty({
        message: "El nombre del producto es requerido."
    }),
    class_validator_1.Length(3, 100),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProduct.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: "la categotia es requerida."
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProduct.prototype, "category", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: "El precio es requerido."
    }),
    class_validator_1.IsInt(),
    __metadata("design:type", String)
], CreateProduct.prototype, "price", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: "La cantidad es requerida."
    }),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateProduct.prototype, "quantity", void 0);
exports.CreateProduct = CreateProduct;
//# sourceMappingURL=createProduct.model.js.map