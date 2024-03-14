import React from 'react';

const UserCard = ({ user }) => {
    if (!user) {
        return <div>Obteniendo Informacion</div>;
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-[500px] h-[120px] p-[20px] bg-gray-400  flex flex-row justify-between m-5">
                <div className="flex flex-col">
                <img src={user.avatar} alt="Avatar del usuario" className="w-10 h-10 rounded-full mr-2 sm:mr-4" />
                    <h1 className='font-bold'>{user.name}</h1>
                    <h2>{user.email}</h2>
                </div>



                <button className="bg-amber-500 hover:bg-black text-white font-bold px-1 rounded m-5 sm:m-5">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default UserCard;