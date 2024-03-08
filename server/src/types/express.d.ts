import express from "express"
import {Request} from "@prisma/client"

declare module 'express' {
    export interface Request {
        user: User
    }
}
