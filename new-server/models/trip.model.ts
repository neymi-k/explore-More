import { prisma } from "../connection/db.client";
import { Request, Response } from "express";

const TripModel = {
  getAllTrips: async () => {
    const result = await prisma.trips.findMany();
    return result;
  },
  getTrip: async (req: Request, res: Response) => {
    const result = await prisma.trips.findMany({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;
  },
  getTripBySeller: async (req: Request, res: Response) => {
    const result = await prisma.trips.findMany({
      where: {
        user_id: parseInt(req.params.id),
      },
    });
    return result;
  },

  createTrip: async (req: Request, res: Response) => {
    const result = await prisma.trips.create({
      data: req.body,
    });
    res.json(result);
  },
  updateTrip: async (req: Request, res: Response) => {
    const result = await prisma.trips.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    return res.json(result);
  },

  deleteTrip: async (req: Request, res: Response) => {
    const result = await prisma.trips.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;
  },
};

export default TripModel;
