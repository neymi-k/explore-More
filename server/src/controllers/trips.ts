import {Request, Response} from "express"
import { prismaClient } from ".." 



export const createTrip = async(req:Request, res:Response) => {

    const trip = await prismaClient.trip.create({
        data: {
            ...req.body,
            // category: req.body.tags.join(',')
        }
    })
    res.json(trip)
}