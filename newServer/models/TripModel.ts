import { prisma } from "../connection/db.client";
import { Request, Response } from "express";

const TripModel = {
    getAllTrips: async () => {
        const result = await prisma.trips.findMany()
        return result;
    },
    getTrip: async (req:Request,res: Response) => {
        const result = await prisma.trips.findMany({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return result;
    },

    createTrip: async ( trip_name: string, trip_description:string, price: number, places: number, category: string, img: string,date_trip: string) => {
        const result = await prisma.trips.create({
            data:  {
              trip_name,
              trip_description,
              price,
              places,
              img,
              date_trip,
              category,    
            }
          })
    },
    updateTrip: async (req:Request,res: Response) => {
        const result = await prisma.trips.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });
    
        return res.json(result)
    },
    

    // router.patch("/products/:id", async (req, res) => {
    //     try {
    //         const product = await prisma.product.update({
    //             where: {
    //                 id: Number(req.params.id),
    //             },
    //             data: req.body,
    //             include: {
    //                 category: true,
    //             },
    //         });
    //         res.json(product);
    //     } catch (error) {
    //         next(error);
    //     }
    // });








    deleteTrip: async (req:Request,res:Response) => {
        const result = await prisma.trips.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
       return result
    },
}

export default TripModel;
