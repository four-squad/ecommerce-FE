import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SaleHistory from "pages/SaleHistory";
import PurchaseHistory from "pages/PurchaseHistory";
import ShoppingCart from "pages/ShoppingCart";
import ShippingPage from "pages/ShippingPage";
import Register from "pages/Auth/Register";
import Detail from "pages/Detail";
import Profil from "pages/Profil";
import LandingPage from "pages";
import Login from "pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profil />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/mycart",
    element: <ShoppingCart />,
  },
  {
    path: "/shipping",
    element: <ShippingPage />,
  },
  {
    path: "/purchase",
    element: <PurchaseHistory />,
  },
  {
    path: "/sale",
    element: <SaleHistory />,
  },
]);
const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
