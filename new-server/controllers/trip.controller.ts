import {Request,Response} from 'express'
import TripModel from '../models/TripModel'
import { any, string } from 'zod';

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
            const id = req.params.id;
    
            // Check if id is valid
            if (!id) {
                res.status(400).json({ message: 'Invalid ID provided' });
                return;
            }
    
            const trip = await TripModel.getTrip(req,res );
    
            // Check if trip is found
            if (!Array.isArray(trip) || trip.length === 0) {
                res.status(404).json({ message: `Trip with id ${id} not found` });
                return;
            }
    
            // Return trip if found
            res.json(trip);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },



    addTrip: async (req: Request, res: Response) => {     
      const { trip_name, trip_description,places, price,  category, img, date_trip } = req.body
      console.log(req.body)
         if( !trip_name || !trip_description ||!price || !places || !category || !img || !date_trip) {
            return res.status(400).json({ message: 'Please provide all trip details' });
        }

        (await TripModel.createTrip(trip_name, trip_description, price, places, category, img, date_trip));
    },
    updateTrip: async (req: Request, res: Response) => {    
        const id = req.params.id;
        const { trip_name, trip_description,places, price,  category, img,date_trip }= req.body
        if (!trip_name || !trip_description ||!price || !places || !category || !img || !date_trip) {
            res.status(400).json({ message: 'Please provide all trip details' });
            return;
        }
        await TripModel.updateTrip(req,res);
    },
    deleteTrip: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const deleteTrip = await TripModel.deleteTrip(req,res);

           res.json(deleteTrip)
        } 
        catch (error) {
            console.log(error)
        }
    },
}

export default TripController














