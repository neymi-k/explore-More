import Router from "express";
import UserController from "../controllers/user.controller";
//import { isAdmin } from "../middlewares/SessionMiddleware";

const router = Router();

//UserRoutes.route("/").get(isAdmin, UserController.getAllUsers);
router.route("/").get(UserController.getAllUsers);
router.route("/:id").delete(UserController.deleteUser);
router.route("/:id").patch(UserController.updateUser);

export default router;
