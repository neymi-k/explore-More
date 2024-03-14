import React, {useEffect, useState } from "react";
import {UserCard } from "../../components/userCard/UserCard"
import { fetchUsers } from "../../services/auth.service"



const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <div>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;