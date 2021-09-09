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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
//Routes
const index_routes_1 = __importDefault(require("./Routes/index.routes"));
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    connectDB() {
        typeorm_1.createConnection();
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        /*this.app.use(express.urlencoded({extended: false})) formularios*/
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/api', index_routes_1.default);
        this.app.use('/api/user', user_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log("server online");
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map