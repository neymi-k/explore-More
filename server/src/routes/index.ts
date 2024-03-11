import {Router} from "express"
import authRoutes from "./auth"
import tripsRoutes from "./trips"

const rootRouter:Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/trips',tripsRoutes)

export default rootRouter 