import Router from "express";
import  UserController  from "../controllers/user.controller";
//import { isAdmin } from "../middlewares/SessionMiddleware";

const router = Router();

//UserRoutes.route("/").get(isAdmin, UserController.getAllUsers);
router.route("/").get(UserController.getAllUsers);


export default router