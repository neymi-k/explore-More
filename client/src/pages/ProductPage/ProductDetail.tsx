import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { HomeProps } from "../../pages/Home/Home";

interface ProductDetailProps {
  trip: HomeProps;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ trip }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex flex-col m-10 p-10 items-center">
      <img
        src="/vuelo.jpg"
        alt="Descripción de la imagen"
        className="w-full h-auto sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[300px] rounded-lg mb-6"
      />
      <div className="ml-4">
        <h2 className="text-xl font-bold mt-2 p-2">{trip.trip_name}</h2>
        <div className="flex mt-2 justify-center">
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
          <AiFillStar color="teal" />
        </div>
        <span className="ml-4 text-lg font-bold">${trip.price}</span>
        <p className="text-sm mt-2 p-2 text-center">{trip.trip_description}</p>

        <h3 className="text-sm mt-2 p-2 flex items-center">
          <FaTag className="mr-2" />
          Difficulty: {trip.category}
        </h3>

        <h3 className="text-sm mt-2 p-2 flex items-center">
          <MdDateRange className="mr-2" />
          Date: {trip.date_trip}
        </h3>

        <div className="text-sm mt-2 p-2">
          <h3 className="font-bold m-3">Acerca de esta caja</h3>
          <ul className="m-5">
            <li>
              <FaCheckCircle className="inline-block mr-2" />1 experiencia de
              aventura para 1 o 2 personas
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-auto p-10 m-10">
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
        <button className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded m-5">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
