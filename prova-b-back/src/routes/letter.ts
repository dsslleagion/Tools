import { Router, Request, Response } from "express";
import LetterController from "../controllers/LetterController";

const routes = Router();

routes.post('/', LetterController.create);
routes.get('/', LetterController.list);
routes.put('/', LetterController.inc);
routes.delete('/', LetterController.delete);

routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida com a letra"}) );

export default routes;