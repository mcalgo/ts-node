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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuIndex = exports.getIndex = void 0;
function getIndex(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield res.status(200).json({
                ok: true,
                msg: 'bienvenido a mi API'
            });
        }
        catch (error) {
            return yield res.status(500).json({
                bad: false,
                msg: 'Error inesperado'
            });
        }
    });
}
exports.getIndex = getIndex;
function getMenuIndex(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield res.status(200).json({});
        }
        catch (error) {
        }
    });
}
exports.getMenuIndex = getMenuIndex;
//# sourceMappingURL=index.controller.js.map