import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { authenticateToken } from "../middlewares/auth.middelware";

const router = Router();

router.route("/login").post(AuthController.loginUser);

router.route("/signup").post(AuthController.registerUser);

/* router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Bienvenido a la ruta protegida!", user: req.user });
}); */

export default router;
