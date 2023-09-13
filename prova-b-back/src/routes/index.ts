import { Router, Request, Response } from "express";
import letter from "./letter";

const routes = Router();

routes.use("/letter", letter);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
