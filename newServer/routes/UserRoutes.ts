import Router from "express";
import  UserController  from "../controllers/UserController";
//import { isAdmin } from "../middlewares/SessionMiddleware";

const UserRoutes = Router();

//UserRoutes.route("/").get(isAdmin, UserController.getAllUsers);
UserRoutes.route("/").get(UserController.getAllUsers);


export default UserRoutes