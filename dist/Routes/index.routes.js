"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../Controllers/index.controller");
const router = express_1.Router();
/*
 Route: /api/
*/
router.route('/api').get(index_controller_1.getIndex);
exports.default = router;
//# sourceMappingURL=index.routes.js.map