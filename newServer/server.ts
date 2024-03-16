import express from "express"
import TripRouter from './routes/TripRoutes'
import UserRouter from './routes/UserRoutes'
// import ReservationRouter from './routes/ReservationsRoutes'
import dotenv from "dotenv";

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/trips/', TripRouter)
app.use('/users/', UserRouter)
// app.use('/reservations/', ReservationRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


//export default {TripRouter,UserRouter, ReservationRouter}
export default {TripRouter,UserRouter}
