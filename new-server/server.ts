import express from "express"
import tripRoutes from './routes/trip.routes'
import userRoutes from './routes/user.routes'
// import ReservationRouter from './routes/ReservationsRoutes'
import dotenv from "dotenv";

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/trips/', tripRoutes)
app.use('/users/', userRoutes)
// app.use('/reservations/', ReservationRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


//export default {TripRouter,UserRouter, ReservationRouter}
export default {tripRoutes,userRoutes}
