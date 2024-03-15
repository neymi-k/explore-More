import React, { useState } from 'react';

const CardProduct = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleEdit = () => {
    // Aquí puedes implementar la lógica para editar
    console.log('Editar');
  };

  const handleDelete = () => {
    // Aquí puedes implementar la lógica para eliminar
    console.log('Eliminar');
  };

  return (
    <div className="justify-center w-150 h-100 top-152 left-168 rounded-lg shadow-md bg-white flex flex-col p-5 m-10">

      <div className="ml-4 flex items-center">
        <img src="../../public/fondo2.jpg" alt="Descripción de la imagen" className="w-32 h-32 rounded-lg mb-4" />
        <div className='p-5 m-5'>
          <h2 className="text-xl font-bold">XC Cross Country</h2>
          <p className="text-sm mt-2">Es, sin duda, la modalidad más popular y más conocida de todas las de ciclismo de montaña a nivel internacional. Es además una de las favoritas de muchos ciclistas ya experimentados, y literalmente significa pedalear campo traviesa</p>
          <span className="ml-4 text-lg font-bold p-5 m-5">$100</span>

        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button onClick={handleEdit} className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded mr-2">
          Editar
        </button>
        <button onClick={handleDelete} className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
