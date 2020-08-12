import express, { response } from 'express';
import db from '../src/database/connection';
import NcmController from './database/controllers/ncmController';

const routes = express.Router();
const ncmController = new NcmController();

routes.get('/', (request, response) => {
    return response.json({
        message: "API para consulta de NCM, para melhor utilização, consulte a documentação"
    });
})

routes.get('/ncms', ncmController.index)
export default routes;