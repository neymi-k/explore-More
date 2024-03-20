import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaTag } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";






const ProductDetail = () => {
  const [counter, setCounter] = useState(0);
  const [rating, setRating] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (

    <div className="flex flex-col m-10 p-10 items-center">
      <img src="/vuelo.jpg" alt="Descripción de la imagen" className="w-full h-auto sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[300px] rounded-lg mb-6" />
      <div className="ml-4">
        <h2 className="text-xl font-bold mt-2 p-2">Título de la Tarjeta</h2>
        <div className="flex mt-2 m-3">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button type="button" key={i} onClick={() => handleRatingChange(ratingValue)} className="mr-2">
                <AiFillStar color={ratingValue <= rating ? 'teal' : 'grey'} />
              </button>
            );
          })}
        </div>
        <span className="ml-4 text-lg font-bold">$150</span>
        <p className="text-sm mt-2 p-2 text-center">Esta es una breve descripción de la tarjeta.</p>
       
 <h3 className="text-sm mt-2 p-2 flex items-center">
    <FaTag className="mr-2" />
    Category
 </h3>

 <h3 className="text-sm mt-2 p-2 flex items-center">
    <MdDateRange className="mr-2" />
    Date
 </h3>

 <div className="text-sm mt-2 p-2">
 <h3 className='font-bold m-3'>Acerca de esta caja</h3>
 <ul className='m-5'>
    <li><FaCheckCircle className="inline-block mr-2" />1 experiencia de aventura para 1 o 2 personas</li>
 </ul>
</div>
</div>
         <div className="flex justify-center items-center mt-auto p-10 m-10">
          <button onClick={decrementCounter} className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mr-2">
            -
          </button>
          <span className="mx-2">{counter}</span>
          <button onClick={incrementCounter} className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mr-2">
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
