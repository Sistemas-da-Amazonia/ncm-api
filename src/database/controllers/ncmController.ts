import {Request, Response} from 'express';
import db from '../connection'

export default class NcmController{
    async index (request: Request, response:Response) {
        const filtros = request.query;

        const EAN = filtros.EAN as string;
        const NCM = filtros.NCM as string;

        if(!NCM && !EAN){
            const all = await db('NCM');
            return response.json(all);
        }
        if (NCM && EAN){
            return response.status(400).json({
                error: "Informe apenas NCM ou EAN, não ambos"
            })            
        } else if(EAN){
            const eancons = await db('NCM').where('EAN', '=', EAN)
            return response.json(eancons);
        } else if(NCM ) {
            const ncmcons = await db('NCM').where('NCM', '=', NCM)
            return response.json(ncmcons)
        } else {
            return response.json({
                message: "NCM ou EAN não encontrado, em breve incluiremos o mesmo"
            })
        }
    }
}