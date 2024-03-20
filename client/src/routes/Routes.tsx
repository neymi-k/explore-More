import { createBrowserRouter, Navigate } from "react-router-dom";
import AddNewProduct from "../pages/AddNewProduct/AddNewProduct";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AuthPage from "../pages/AuthPage/AuthPage"; 
import ProductPage from "../pages/ProductPage/ProductDetail"
/*import ShoppingCart from "../pages/ShoppingCart/index" */
import App from "../pages/App";
import Home from "../pages/Home/Home";
import YourProducts from "../pages/YourProduct/YourProducts";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
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
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
          path: "/productdetail",
          element: <ProductPage />
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
    path: "/login",
    element: <AuthPage />,
  },
]);
