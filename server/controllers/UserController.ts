import e, {Request, Response} from "express"
import {connection} from "../database/config"

const UserController = {
    getAllUsers: async (req: Request,res: Response) => {
        try {
            const result = await connection.query('SELECT * FROM users');
            res.json(result)
        }
        catch (error){
            console.log(error);
        }
    },
    getUser: async (req: Request, res: Response) => {
        try {

        }
        catch {

        }
    },
    addUser: async (req: Request, res: Response) => {
        try {

        }
        catch {

        }
    },
    updateUser: async (req: Request, res: Response) => {
        try {

        }
        catch {

        }
    },
    deleteUser: async (req: Request, res: Response) => {
        try {

        }
        catch {

        }
    },
}

export default  UserController