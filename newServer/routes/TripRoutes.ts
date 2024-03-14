import { Router } from "express";
import TripController from "../controllers/TripController";

const TripRouter = Router();

TripRouter.route('/').get(TripController.getAllTrips);
TripRouter.route('/:id').get(TripController.getTrip);
TripRouter.route('/').post(TripController.addTrip);
TripRouter.route('/:id').put(TripController.updateTrip);
TripRouter.route('/:id').delete(TripController.deleteTrip);

export default TripRouter  