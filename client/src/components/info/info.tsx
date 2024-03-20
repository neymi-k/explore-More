import React from 'react';
import { FaHiking } from "react-icons/fa";
import { TbBasketDiscount } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";



const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 bg-gray-300 flex flex-col items-center justify-center pt-5">
        <div className="circle bg-blue-100 rounded-full p-4">
          <FaHiking className="text-4xl text-amber-600" />
        </div>
        <p className="px-9 py-8 text-ml mb-2 text-base">Te ofrecemos vacaciones por todo el mundo, mostrándote cada rincón y sus secretos</p>
      </div>


      <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 bg-gray-300 flex flex-col items-center justify-center pt-5">
        <div className="circle bg-blue-100 rounded-full p-4">
          <TbBasketDiscount className="text-4xl text-amber-600" />
        </div>
        <p className="px-9 py-8 text-ml mb-2 text-base">Promociones y ofertas seleccionadas para ti. ¡Tenemos los mejores chollos!</p>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 bg-gray-300 flex flex-col items-center justify-center pt-4">
        <div className="circle bg-blue-100 rounded-full p-4">
          <MdImportantDevices className="text-4xl text-amber-600" />
        </div>
        <p className="px-9 py-8 text-ml mb-2 text-base">Reserva tu viaje de forma rapida y sencilla desde cualquier dispositivo</p>
      </div>


      <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 bg-gray-300 flex flex-col items-center justify-center pt-5">
        <div className="circle bg-blue-100 rounded-full p-4">
          <MdOutlineSupportAgent className="text-4xl text-amber-600" />
        </div>
        <p className="px-9 py-8 text-ml mb-2 text-base">Asesores especializados te ayudarán a elegir y planificar tus vacaciones para tu disfrute</p>
      </div>
    </div>


  );
};

export default Info;
