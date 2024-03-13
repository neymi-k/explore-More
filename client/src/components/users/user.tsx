import React from 'react';
import Avatar from 'react-avatar';

const UserCard = ({ user }) => {
 return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
        <p className="text-gray-700 text-base">
          <Avatar src={user.avatar} size="100" round={true} />
        </p>
        <p className="text-gray-700 text-base">{user.email}</p>
      </div>
    </div>
 );
};

export default UserCard;
