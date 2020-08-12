"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ncmController_1 = __importDefault(require("./database/controllers/ncmController"));
const routes = express_1.default.Router();
const ncmController = new ncmController_1.default();
routes.get('/', (request, response) => {
    return response.json({
        message: "API para consulta de NCM, para melhor utilização, consulte a documentação"
    });
});
routes.get('/ncms', ncmController.index);
exports.default = routes;
