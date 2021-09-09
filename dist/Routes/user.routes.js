"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_controller_1 = require("../Controllers/user.controller");
const fieldValidation_middleware_1 = require("../middlewares/fieldValidation.middleware");
const router = express_1.Router();
/*
    Route: /api/user
*/
router.route('/').get(user_controller_1.getUsers)
    .post([
    express_validator_1.check('name').notEmpty().withMessage('los nombre es obligatorio'),
    express_validator_1.check('last_Name').notEmpty().withMessage('Los apellidos son obligatorios'),
    express_validator_1.check('document').notEmpty().withMessage('El documento es obligatorio'),
    express_validator_1.check('Password').notEmpty().withMessage('La contraseña es obligatoria'),
    fieldValidation_middleware_1.fieldValidate,
], user_controller_1.postUser);
router.route('/:UserId').get(user_controller_1.getUser);
router.route('/:UserId').put(user_controller_1.putUser);
router.route('/:UserId').delete(user_controller_1.deletUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map