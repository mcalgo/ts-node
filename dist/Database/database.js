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
exports.SqlConfig = void 0;
const mssql = require('mssql');
class SqlConfig {
    constructor() {
        this.sqlconfig = {
            user: 'sa',
            password: '123456',
            server: 'localhost',
            database: 'Node',
            options: {
                encrypt: true,
                trustServerCertificate: false
            }
        };
        this.dbSqlConnection();
    }
    dbSqlConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield mssql.connect(this.sqlconfig);
                const result = yield pool.query `SELECT 1`;
                console.log(result);
            }
            catch (error) {
            }
        });
    }
}
exports.SqlConfig = SqlConfig;
//# sourceMappingURL=database.js.map