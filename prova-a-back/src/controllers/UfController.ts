import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Uf } from "../entities/Uf";

class UfController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { sigla, nome } = req.body;
        //verifica se foi fornecido o parâmetro
        if (!sigla || sigla.trim() === "") {
            return res.json({ error: "A sigla é necessária" });
        }
        if (!nome || nome.trim() === "") {
            return res.json({ error: "O nome é necessário" });
        }
        const obj = new Uf();
        obj.sigla = sigla;
        obj.nome = nome;

        const team: any = await AppDataSource.manager.save(Uf, obj).catch((e) => {
            // testa se o nome é repetido
            if (/UNIQUE.*sigla/.test(e.message)) {
                return { error: 'A sigla já existe' };
            }
            // testa se o nome é repetido
            else if (/UNIQUE.*nome/.test(e.message)) {
                return { error: 'O nome já existe' };
            }
            else{
                return { error: e.message };
            }
        });
        return res.json(team);
    }
    public async list(_: Request, res: Response): Promise<Response> {
        const ufs = await AppDataSource.getRepository(Uf).find({
            order: {
                sigla: 'asc'
            }
        });
        return res.json(ufs);
    }

}

export default new UfController();