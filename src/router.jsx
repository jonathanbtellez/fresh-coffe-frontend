import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import AdminLayout from "./layout/AdminLayout";
import Orders from "./views/Orders";
import Products from "./views/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Orders />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
