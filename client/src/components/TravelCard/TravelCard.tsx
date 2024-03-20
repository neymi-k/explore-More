import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"; // Importa el ícono de estrella
import { HomeProps } from "../../pages/Home/Home";

interface TravelCardProps {
  trip: HomeProps;
}

const TravelCard: React.FC<TravelCardProps> = ({ trip }) => {
  const [counter, setCounter] = useState(0);
  /*   const [rating, setRating] = useState(0); // Estado para la puntuación
   */
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Función para manejar el cambio de puntuación
  /*   const handleRatingChange = (newRating) => {
    setRating(newRating);
  }; */

  return (
    <div className="w-[300px] min-h-[420px] rounded-lg shadow-md bg-white flex flex-col m-10 p-10 items-center ">
      <img
        src="/vuelo.jpg"
        alt="Descripción de la imagen"
        className="w-32 h-32 rounded-lg mb-4 justify-center"
      />
      <div className="mb-3">
        <div className="flex mt-2 justify-center">
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
        </div>
        <h2 className="text-xl font-bold mt-2">{trip.trip_name}</h2>
        <p className="text-sm mt-2">{trip.trip_description}</p>
        <p className="text-sm mt-2">Difficulty: {trip.category}</p>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <button
          onClick={decrementCounter}
          className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mr-2"
        >
          -
        </button>
        <span className="mx-2">{counter}</span>
        <button
          onClick={incrementCounter}
          className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mr-2"
        >
          +
        </button>
        <span className="ml-4 text-lg font-bold">${trip.price}</span>
      </div>
    </div>
  );
};

export default TravelCard;
