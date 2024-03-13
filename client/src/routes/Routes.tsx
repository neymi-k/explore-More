import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddNewProduct from "../pages/AddNewProduct/index"
import AdminDashboard from "../pages/AdminDashboard/index"
import AuthPage from "../pages/AuthPage/AuthPage"
import Home from "../pages/Home/index"
import Notfound from "../pages/Notfound/index"
import ProductPage from "../pages/ProductPage/index"
import ShoppingCart from "../pages/ShoppingCart/index"
import MainLayout from "../components/mainLayout/MainLayout"

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <AuthPage />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/newproduct",
            element: <AddNewProduct />
        },
        {
            path: "/admin",
            element: <AdminDashboard/>
        },
        {
            path: "/productdetail",
            element: <ProductPage />
        },
        {
            path: "/shoppingcar",
            element: <ShoppingCart />
        },
        {
            path: "/contact",
            element: <Notfound />
        }
    ]
}
]
)