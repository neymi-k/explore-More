import { Router } from "express";
import TripController from "../controllers/trip.controller";

const router = Router();

router.route("/").get(TripController.getAllTrips);
router.route("/:id").get(TripController.getTrip);
router.route("/seller/:id").get(TripController.getTripBySeller);
router.route("/").post(TripController.addTrip);
router.route("/:id").put(TripController.updateTrip);
router.route("/:id").delete(TripController.deleteTrip);

export default router;

//import { isAdmin } from "../middlewares/SessionMiddleware";
