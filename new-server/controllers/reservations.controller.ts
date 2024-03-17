// import {Request,Response} from 'express'
// import ReservationModel from '../models/ReservationModel'

// const ReservationController = {
//     getAllReservations: async (req: Request, res: Response) => {
//         try {
//             const reservations = await ReservationModel.getAllReservations();
//             res.json(reservations);
//         }
//         catch (error){
//             console.log(error)
//         }
//     },
//     getReservation: async (req: Request, res: Response) => {
//         try {
//             const id= req.params.id;
//             const reservation = await ReservationModel.getReservation(id);
//             if (!Array.isArray(reservation) || reservation.length === 0) {
//                 res.status(404).json({ message: `Reservation with id ${id} not found` });
//                 return;
//             }
//             res.json(reservation)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     },
//     addReservation: async (req: Request, res: Response) => {     
//       const { date_reservation, participants, total_price } = req.body
//       console.log(req.body)
//          if( !date_reservation || !participants ||!total_price) {
//             return res.status(400).json({ message: 'Please provide all reservation details' });
//         }

//         (await ReservationModel.createReservation(date_reservation, participants, total_price));
//     },
//     updateReservation: async (req: Request, res: Response) => {    
//         const id = req.params.id;
//         const { date_reservation, participants, total_price }= req.body
//         if (!date_reservation || !participants ||!total_price) {
//             res.status(400).json({ message: 'Please provide all reservations details' });
//             return;
//         }
//         await ReservationModel.updateReservation(id,date_reservation, participants, total_price);
//     },
//     deleteReservation: async (req: Request, res: Response) => {
//         try {
//             const id = req.params.id;
//             const deleteReservation = await ReservationModel.deleteReservation(id);

//            res.json(deleteReservation)
//         } 
//         catch (error) {
//             console.log(error)
//         }
//     },
// }

// export default ReservationController














