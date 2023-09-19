import AppDataSource from "../data-source";
import { NextFunction, Request, Response } from 'express';
import { Call } from "../entities/Call";
import { IsUndefined } from "../utils/global";


class CallController {
    private callRepository = AppDataSource.getRepository("call")

    // async all(req: Request, res: Response, next: NextFunction) {
    //     this.callRepository.find();
    // }

    async list(req: Request, res: Response): Promise<Response> {
        const response: any = await AppDataSource.getRepository(Call).find({
            order: {
                id: 'asc'
            }
        });
        return res.json(response);
    }



    async status(req: Request, res: Response, next: NextFunction){
        const status = req.params.status

        const call = await this.callRepository.findOne({
            where: {status}
        })

        if(!call){
            return "Not Found"
        }

        return status;
    }



    // async custom(req: Request, res:Response, where: string){
    //     const {type, title, description, status} = req.body;
    //     const call = await AppDataSource.getRepository(Call)
    //     .createQueryBuilder("call")
    //     if(!IsUndefined(type)){
    //         call.where("")
    //     }
    // }

    // async save(req: Request, res: Response, next: NextFunction){
    //     const {type, title, description, status} = req.body;

    //     const call = Object.assign(new Call(), {
    //         type,
    //         title,
    //         description,
    //         status,
    //     })

    //     if(!call){
    //         return "Invalid input"
    //     }

    //     return this.callRepository.save(call);
    // }

    public async create(req: Request, res: Response): Promise<Response> {
        const { type, title, description, status } = req.body;

        const obj = new Call();
        obj.type = type;
        obj.title = title;
        obj.description = description;
        obj.status = status;

        const call: any = await AppDataSource.manager.save(Call, obj).catch((e) => {

        })
        if (call.id) {

            return res.json({
                id: call.id,
                type: call.type,
                title: call.title,
                description: call.description,
                status: call.status
            });
        }
        return res.json(call);

    }


    // async remove(req: Request, res: Response, next: NextFunction){
    //     const id = req.body;
    //     const callToRemove = await AppDataSource.getRepository(Call)
    //     .findOneBy( {id: id,})
    //     await AppDataSource.getRepository(Call).remove(callToRemove)
    // }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body
        const call: any = await AppDataSource.manager.findOneBy(Call, { id }).catch((e) => {
            return { error: "Identificador inválido" }
        })

        if (call && call.id) {
            const r = await AppDataSource.manager.remove(Call, call).catch((e) => e.message)
            return res.json(r)
        }
        else if (call && call.error) {
            return res.json(call)
        }
        else {
            return res.json({ error: "Usuario não localizado" })
        }

        
    }


}export default new CallController();