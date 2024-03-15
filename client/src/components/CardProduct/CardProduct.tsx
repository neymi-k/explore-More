import React, { useState } from "react";
import { updateProduct, deleteProduct } from "../../services/product.service";

interface Trip {
  id: number;
  name: string;
  description: string;
  price: number;
  places: number;
  category: string;
  image: string;
  date: string;
}

interface CardProductProps {
  trip: Trip;
}

const CardProduct: React.FC<CardProductProps> = ({ trip }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editableTrip, setEditableTrip] = useState<Trip>(trip);

  /*   const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }; */

  const handleEdit = async () => {
    await updateProduct(editableTrip.id, editableTrip);
    alert("Producto editado con éxito");
    console.log("Producto editado con éxito");
    setOpenModal(false);
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    alert("Producto eliminado con éxito");
    console.log("Producto eliminado con éxito");
  };

  return (
    <div className="justify-center w-150 h-100 top-152 left-168 rounded-lg shadow-md bg-white flex flex-col p-5 m-10">
      <div className="ml-4 flex items-center">
        <img
          src={trip.image} //"../../public/fondo2.jpg"
          alt={trip.name} //"Descripción de la imagen"
          className="w-32 h-32 rounded-lg mb-4"
        />
        <div className="p-5 m-5">
          <h2 className="text-xl font-bold">{trip.name}</h2>{" "}
          {/* XC Cross Country */}
          <p className="text-sm mt-2">
            {trip.description}
            {/* Es, sin duda, la modalidad más popular y más conocida de todas las
            de ciclismo de montaña a nivel internacional. Es además una de las
            favoritas de muchos ciclistas ya experimentados, y literalmente
            significa pedalear campo traviesa */}
          </p>
          <span className="ml-4 text-lg font-bold p-5 m-5">
            {trip.price} {/* $100 */}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(trip.id)}
          className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
