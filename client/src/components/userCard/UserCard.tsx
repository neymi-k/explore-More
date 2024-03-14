import React, { useState, useEffect } from 'react';

const UserCard = () => {
 const [userData, setUserData] = useState(null);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://random-data-api.com/api/users/random_user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
 }, []);

 if (!userData) {
    return <div>Obteniendo Informacion</div>;
 }

 return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px] h-[120px] p-[20px] bg-gray-400 shadow-md flex flex-row justify-between m-10 p-5">
        <div className="flex items-center">
          <img src={userData.avatar} alt="Avatar del usuario" className="w-10 h-10 rounded-full mr-2 sm:mr-4" />
          <div className="flex flex-col">
            <h1 className='font-bold '>{userData.first_name} {userData.last_name}</h1>
            <h2>{userData.email}</h2>
            <h3>{userData.date_of_birth}</h3>
          </div>
        </div>
        <button className="bg-amber-500 hover:bg-black text-white font-bold px-1 rounded m-5 sm:m-5">
          Eliminar
        </button>
      </div>
    </div>
 );
};

export default UserCard;
