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

  const userData = JSON.parse(storedData);
  const token = userData?.token;
  console.log(token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode<CustomJwtPayload>(token);
  if (decodedToken.role !== "user") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
