"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
class NcmController {
    async index(request, response) {
        const { EAN, NCM } = request.body;
        if (!NCM && !EAN) {
            const all = await connection_1.default('NCM');
            return response.json(all);
        }
        if (NCM && EAN) {
            return response.status(400).json({
                error: "Informe apenas NCM ou EAN, não ambos"
            });
        }
        else if (EAN) {
            const eancons = await connection_1.default('NCM').where('EAN', '=', EAN);
            return response.json(eancons);
        }
        else if (NCM) {
            const ncmcons = await connection_1.default('NCM').where('NCM', '=', NCM);
            return response.json(ncmcons);
        }
    }
}
exports.default = NcmController;
