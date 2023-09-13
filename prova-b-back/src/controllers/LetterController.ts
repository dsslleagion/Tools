import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Letter } from "../entities/Letter";

class LetterController {
    public async create(req: Request, res: Response): Promise<Response> {
        let { letter } = req.body;
        if (!letter || letter.trim() === "") {
            return res.json({ error: "A letra é necessária" });
        }
        letter = letter.trim().toUpperCase();
        if (letter.length > 1) {
            return res.json({ error: "A letra precisa ter um caractere" });
        }
        const exists: any = await AppDataSource.manager.findOneBy(Letter, { letter });
        if (exists) {
            return res.json(exists);
        }

        const obj = new Letter();
        obj.letter = letter;

        const response: any = await AppDataSource.manager.save(Letter, obj);
        return res.json(response);
    }

    public async inc(req: Request, res: Response): Promise<Response> {
        let { letter } = req.body;
        if (!letter || letter.trim() === "") {
            return res.json({ error: "A letra é necessária" });
        }
        const obj: any = await AppDataSource.manager.findOneBy(Letter, { letter: letter.trim().toUpperCase() });
        if (obj && obj.letter) {
            obj.count++;
            const r = await AppDataSource.manager.save(Letter, obj);
            return res.json(r);
        }
        else {
            return res.json({ error: "Letra não localizada" });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { letter } = req.body;
        if (!letter || letter.trim() === "") {
            return res.json({ error: "A letra é necessária" });
        }
        const obj: any = await AppDataSource.manager.findOneBy(Letter, { letter: letter.trim().toUpperCase() });
        if (obj && obj.letter) {
            const r = await AppDataSource.manager.delete(Letter, obj);
            if (r.affected === 1) {
                return res.json(obj);
            }
        }
        return res.json({ error: "Letra não localizada" });
    }

    public async list(_: Request, res: Response): Promise<Response> {
        const response = await AppDataSource.getRepository(Letter).find({
            order: {
                letter: 'asc'
            }
        });
        return res.json(response);
    }

}

export default new LetterController();