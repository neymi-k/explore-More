import express from "express";
import tripRoutes from "./routes/trip.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
// import ReservationRouter from './routes/ReservationsRoutes'
import dotenv from "dotenv";

require("dotenv").config();

const port = process.env.PORT;

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5174",
};
app.use(cors(corsOptions));

app.use("/trips/", tripRoutes);
app.use("/users/", userRoutes);
app.use("/auth", authRoutes);

// app.use('/reservations/', ReservationRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//export default {TripRouter,UserRouter, ReservationRouter}
export default { tripRoutes, userRoutes };
