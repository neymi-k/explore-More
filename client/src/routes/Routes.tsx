import { createBrowserRouter, Navigate } from "react-router-dom";
import AddNewProduct from "../pages/AddNewProduct/AddNewProduct";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProductPage from "../pages/ProductPage/ProductDetail";
/*import ShoppingCart from "../pages/ShoppingCart/index" */
import App from "../pages/App";
import Home from "../pages/Home/Home";
import YourProducts from "../pages/YourProduct/YourProducts";
import Contact from "../pages/Contact/Contact";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Navigate to="/login" />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/yourproducts",
            element: <YourProducts />,
          },
          {
            path: "/newproduct",
            element: <AddNewProduct />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/productdetail",
            element: <ProductPage />,
          },
          /*
        {
            path: "/shoppingcart",
            element: <ShoppingCart />
        }
        */
        ],
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);
