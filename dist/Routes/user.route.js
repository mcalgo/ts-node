"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const user_controller_1 = require("../Controllers/user.controller");
/*
    Route: /api/user
*/
const router = express_1.Router();
const userController = typeorm_typedi_extensions_1.Container.get(user_controller_1.UserController);
router.route('/')
    .get(userController.getUsers.bind(userController))
    .post(userController.postUser.bind(userController));
router.route('/:UserId').get(userController.getUser.bind(userController))
    .put(userController.putUser.bind(userController))
    .delete(userController.deletUser.bind(userController));
exports.default = router;
//# sourceMappingURL=user.route.js.map