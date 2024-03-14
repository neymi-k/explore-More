import Router from "express";
import { UserController } from "../controllers/UserController";
import { isAdmin } from "../middlewares/SessionMiddleware";

export const userRoutes = Router();

userRoutes.route("/").get(isAdmin, UserController.getAllUsers);


