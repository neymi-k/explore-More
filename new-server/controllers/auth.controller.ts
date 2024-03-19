import { Request, Response } from "express";
import AuthModel from "../models/auth.model";

const AuthController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const user = await AuthModel.registerUser(userData);
      res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      res.status(500).json("internal server error");
    }
  },

  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthModel.loginUser(email, password);
      const userData = {
        email: user.email,
        name: user.name,
        role: user.role,
        id: user.id,
      };
      res.json({ message: "Inicio de sesión exitoso", token, userData });
    } catch (error) {
      res.status(500).json("internal server error");
    }
  },
};

export default AuthController;
