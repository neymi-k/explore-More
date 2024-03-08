import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from "jsonwebtoken"
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";

const authMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    // extract token from header
    const token= req.headers.authorization

    // if token not present throw an error of unauthorized
    if(!token) {
        next(new UnauthorizedException('Unauthorized', ErrorCode.UNAUTHORIZED))
    }
    try {
        // if token, verify and extract payload
    const payload = jwt.verify(token, JWT_SECRET) as any

    // get user from payload

    const user = await prismaClient.user.findFirst({where: {id: payload.userId}})
    if(!user) {
        next(new UnauthorizedException('Unauthorized', ErrorCode.UNAUTHORIZED))
    }
    //attach user to current request object
    req.user = user;
    next()

    }
    catch {
        next(new UnauthorizedException('Unauthorized', ErrorCode.UNAUTHORIZED))
    }
    }
    
export default authMiddleware 


