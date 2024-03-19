import { Request, Response } from "express";
import AuthModel from "../models/user.model";

const AuthController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await AuthModel.registerUser(name, email, password, role);
      res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthModel.loginUser(email, password);
      res.json({ message: "Inicio de sesión exitoso", token, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default AuthController;
