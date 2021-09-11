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
exports.ProductPurchase = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const user_entity_1 = require("./user.entity");
let ProductPurchase = class ProductPurchase {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductPurchase.prototype, "ProductoParchaseID", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.OneToOne(() => product_entity_1.Product),
    __metadata("design:type", product_entity_1.Product)
], ProductPurchase.prototype, "ProductID", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'PurchaseDate',
        type: 'timestamp',
        nullable: false
    }),
    __metadata("design:type", Date)
], ProductPurchase.prototype, "PurchaseDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProductPurchase.prototype, "Total", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.OneToOne(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], ProductPurchase.prototype, "UserID", void 0);
ProductPurchase = __decorate([
    typeorm_1.Entity('ProductPurchase')
], ProductPurchase);
exports.ProductPurchase = ProductPurchase;
//# sourceMappingURL=productPurchase.entity.js.map