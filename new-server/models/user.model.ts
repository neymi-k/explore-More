import { prisma } from "../connection/db.client";
import { Request } from "express";

const UserModel = {
  getAllUsers: async () => {
    const result = await prisma.users.findMany();
    return result;
  },
  getUser: async (req: Request) => {
    const id = req.params.id;
    console.log(id);
    const result = await prisma.users.findMany({
      where: {
        id: parseInt(id), // Assuming 'id' is a unique identifier for users
      },
    });
    return result;
  },

  createUser: async (
    name: string,
    email: string,
    password: string,
    role: any
  ) => {
    const result = await prisma.users.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
  },
  updateUser: async (
    id: string,
    name: String,
    email: String,
    password: String,
    role: String
  ) => {
    const result = await prisma.users.findFirst();
    return result;
  },

  deleteUser: async (id: string) => {
    const deleteReservations = prisma.reservations.deleteMany({
      where: {
        userId: parseInt(id),
      },
    });
    const deleteTrips = prisma.trips.deleteMany({
      where: {
        user_id: parseInt(id),
      },
    });
    const deleteUser = prisma.users.delete({
      where: {
        id: parseInt(id),
      },
    });
    const transaction = await prisma.$transaction([
      deleteReservations,
      deleteTrips,
      deleteUser,
    ]);

    return transaction;
  },
};

export default UserModel;
