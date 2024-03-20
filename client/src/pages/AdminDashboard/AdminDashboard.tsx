import { useEffect, useState } from "react";
import UserCard from "../../components/userCard/UserCard";
import { fetchUsers } from "../../services/user.service";
import { Navigate, useNavigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const AdminDashboard = () => {
  const token = localStorage.getItem("user");
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      if (decodedToken.role !== "admin") {
        navigate("/home");
      }
    }
  }, [token, navigate]);

  if (!token) {
    return <Navigate to="/login" />;
  }

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
