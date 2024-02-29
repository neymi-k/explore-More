import { Router } from "express";
import authRoutes from "./auth";

const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes) //ruta configurada

export default rootRouter; 