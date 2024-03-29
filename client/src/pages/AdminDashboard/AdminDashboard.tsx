import { useEffect, useState } from "react";
import UserCard from "../../components/userCard/UserCard";
import { fetchUsers } from "../../services/user.service";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold p-8">Admin Dashboard</h1>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
