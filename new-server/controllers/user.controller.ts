import {Request,Response} from 'express'
import UserModel from '../models/UserModel'

const UserController = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserModel.getAllUsers();
            res.json(users);
        }
        catch (error){
            console.log(error)
        }
    },
    getUser: async (req: Request, res: Response) => {
        try {
            const id: any= req.params.id;
            const user = await UserModel.getUser(id);
            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: `Usesr with id ${id} not found` });
                return;
            }
            res.json(user)
        }
        catch (error) {
            console.log(error)
        }
    },
    addUser: async (req: Request, res: Response) => {     
      const { name, email, password, role } = req.body
      console.log(req.body)
         if( !name || !email ||!password || !role) {
            return res.status(400).json({ message: 'Please provide all user details' });
        }

        (await UserModel.createUser(name, email, password, role));
    },
    updateUser: async (req: Request, res: Response) => {    
        const id = req.params.id;
        const { name, email, password, role }= req.body
        if (!name || !email ||!password || !role) {
            res.status(400).json({ message: 'Please provide all user details' });
            return;
        }
        await UserModel.updateUser(id,name, email, password, role);
    },
    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const deleteUser = await UserModel.deleteUser(id);

           res.json(deleteUser)
        } 
        catch (error) {
            console.log(error)
        }
    },
}

export default UserController














