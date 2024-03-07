import {Request, Response} from "express"
import { prismaClient } from '..'
import { hashSync } from "bcrypt"




export const signup = async (req:Request,res:Response) => {

  const {email, password, first_name, second_name} = req.body;

    let user = await prismaClient.user.findFirst({where: {email}})
    if (user) {
        throw Error('User already exists')
    }
    user = await prismaClient.user.create({
        data:{
            first_name,
            second_name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.json(user)
}

