"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
module.exports = {
    client: 'mysql2',
    connection: {
        host: 'www.sistemasdaamazonia.com.br',
        user: 'siste619_ncm',
        password: 'siste619',
        database: 'siste619_NCM'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, "src", "database", "migrations")
    }
};
