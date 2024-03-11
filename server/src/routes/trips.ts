import { Router } from "express";
import { errorHandler } from "../error-handler";
import {createTrip} from "../controllers/trips"

const tripsRoutes:Router = Router()

tripsRoutes.post('/', errorHandler(createTrip))

export default tripsRoutes