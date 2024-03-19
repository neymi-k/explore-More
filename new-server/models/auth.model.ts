import bcrypt from "bcrypt";
import { prisma } from "../connection/db.client";
import { Request } from "express";
import jwt from "jsonwebtoken";

const AuthModel = {
  registerUser: async (
    name: string,
    email: string,
    password: string,
    role: any
  ) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return result;
  },

  loginUser: async (email: string, password: string) => {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, user };
  },
};

export default AuthModel;
