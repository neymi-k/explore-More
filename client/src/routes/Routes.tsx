import { createBrowserRouter } from "react-router-dom";
import AddNewProduct from "../pages/AddNewProduct/AddNewProduct";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AuthPage from "../pages/AuthPage/AuthPage"; /*
import ProductPage from "../pages/ProductPage/index"
import ShoppingCart from "../pages/ShoppingCart/index" */
import App from "../pages/App";
import Home from "../pages/Home/Home";
import MainLayout from "../components/mainLayout/MainLayout";
import YourProducts from "../pages/YourProduct/YouProducts";
import Contact from "../pages/Contact/Contact";

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
      /*
        {
            path: "/productdetail",
            element: <ProductPage />
        },
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
