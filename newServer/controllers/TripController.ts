import {Request,Response} from 'express'
import TripModel from '../models/TripModel'

const TripController = {
    getAllTrips: async (req: Request, res: Response) => {
        try {
            const trips = await TripModel.getAllTrips();
            res.json(trips);
        }
        catch (error){
            console.log(error)
        }
    },
    getTrip: async (req: Request, res: Response) => {
        try {
            const id= req.params.id;
            const trip = await TripModel.getTrip(id);
            if (!Array.isArray(trip) || trip.length === 0) {
                res.status(404).json({ message: `Trip with id ${id} not found` });
                return;
            }
            res.json(trip)
        }
        catch (error) {
            console.log(error)
        }
    },
    addTrip: async (req: Request, res: Response) => {     
      const { trip_name, trip_description,places, price,  category, img,date_trip } = req.body
      console.log(req.body)
         if( !trip_name || !trip_description ||!price || !places || !category || img || date_trip) {
            return res.status(400).json({ message: 'Please provide product name, price, stock quantity and category id' });
        }

        (await TripModel.createProduct(trip_name, trip_description, price, places, category, img, date_trip));
    },
    updateTrip: async (req: Request, res: Response) => {    
        const id = req.params.id;
        const { trip_name, trip_description,places, price,  category, img,date_trip }= req.body
        if (!trip_name || !trip_description ||!price || !places || !category || img || date_trip) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity and category id' });
            return;
        }
        await TripModel.updateTrip(trip_name, trip_description, price, places, category, img, date_trip);
    },
    deleteTrip: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const deleteTrip = await TripModel.deleteTrip(id);

           res.json(deleteTrip)
        } 
        catch (error) {
            console.log(error)
        }
    },
}

export default TripController














