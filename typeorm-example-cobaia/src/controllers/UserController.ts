import AppDataSource from "../data-source";
import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/User';


class UserController {

    private userRepository = AppDataSource.getRepository(User)

    //   async all(request: Request, response: Response, next: NextFunction) {
    //       return this.userRepository.find()
    //   }


    async list(req: Request, res: Response): Promise<Response> {
        const response: any = await AppDataSource.getRepository(User).find({
            order: {
                id: 'asc'
            }
        });
        return res.json(response);
    }



    // async one(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)


    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }
    //     return user

    // }

    public async one(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        const usuario: any = await AppDataSource.manager.findOneBy(User, { id }).catch((e) => {
        })
        return res.json(usuario);
    }



    //   async save(request: Request, response: Response, next: NextFunction) {
    //       const { firstName, lastName, age } = request.body;

    //       const user = Object.assign(new User(), {
    //           firstName,
    //           lastName,
    //           age
    //       })

    //       return this.userRepository.save(user)
    //   }

    public async create(req: Request, res: Response): Promise<Response> {
        const { firstName, lastName, age } = req.body;

        const obj = new User();
        obj.firstName = firstName;
        obj.lastName = lastName;
        obj.age = age;

        const usuario: any = await AppDataSource.manager.save(User, obj).catch((e) => {

        })
        if (usuario.id) {

            return res.json({
                id: usuario.id,
                firstName: usuario.firstName,
                lastName: usuario.lastName,
                age: usuario.age
            });
        }
        return res.json(usuario);

    }



    //   async remove(request: Request, response: Response, next: NextFunction) {
    //       const id = parseInt(request.params.id)

    //       let userToRemove = await this.userRepository.findOneBy({ id })

    //       if (!userToRemove) {
    //           return "this user not exist"
    //       }

    //       await this.userRepository.remove(userToRemove)

    //       return "user has been removed"
    //   }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body
        const usuario: any = await AppDataSource.manager.findOneBy(User, { id }).catch((e) => {
            return { error: "Identificador inválido" }
        })

        if (usuario && usuario.id) {
            const r = await AppDataSource.manager.remove(User, usuario).catch((e) => e.message)
            return res.json(r)
        }
        else if (usuario && usuario.error) {
            return res.json(usuario)
        }
        else {
            return res.json({ error: "Usuario não localizado" })
        }

        
    }




} export default new UserController();