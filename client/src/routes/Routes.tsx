import { createBrowserRouter, RouterProvider } from "react-router-dom"; /* 
import AddNewProduct from "../pages/AddNewProduct/index" */
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard" 
import AuthPage from "../pages/AuthPage/AuthPage";
/* import Home from "../pages/Home/index"
import Notfound from "../pages/Notfound/index"
import ProductPage from "../pages/ProductPage/index"
import ShoppingCart from "../pages/ShoppingCart/index" */
/* import MainLayout from "../components/mainLayout/MainLayout"; */
import App from "../pages/App";
import Home from "../pages/Home";
import MainLayout from "../components/mainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
          path: "/admin",
          element: <AdminDashboard/>
      },
      /*  
      {
        path: "/newproduct",
            element: <AddNewProduct />
        },
        {
            path: "/productdetail",
            element: <ProductPage />
        },
        {
            path: "/shoppingcart",
            element: <ShoppingCart />
        },
        {
            path: "/contact",
            element: <Notfound />
        },
        {
            path: "/yourproducts",
            element: <YourProducts />
        }
        
        */
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);
