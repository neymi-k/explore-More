import { Navigate, Outlet } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const ProtectedRoute = () => {
  const storedData = localStorage.getItem("user");
  console.log(storedData);
  if (!storedData) {
    return <Navigate to="/login" />;
  }

  const localData = JSON.parse(storedData);
  const token = localData?.token;
  console.log(token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode<CustomJwtPayload>(token);
  if (decodedToken.role === "ADMIN") {
    return <Navigate to="/home" />;
  }

  if (decodedToken.role === "USER") {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
