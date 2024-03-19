import React from "react";
import Avatar from "react-avatar";

interface UserCardProps {
  user: {
    avatar?: string;
    name: string;
    email: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  if (!user) {
    return <div>Obteniendo Información</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[120px] p-[20px] bg-gray-300  flex flex-row items-center justify-between m-5 border-5px rounded-lg pl-7 shadow">
        <Avatar name={user.name} src={user.avatar} size="40" round={true} />
        <div className="flex flex-col -ml-20">
          <h1 className="font-bold">{user.name}</h1>
          <h2>{user.email}</h2>
        </div>

        <button className="bg-amber-500 hover:bg-black text-white font-bold px-3 py-1 m-5 rounded-md">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default UserCard;
