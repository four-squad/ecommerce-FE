import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShoppingCart from "pages/ShoppingCart";
import ShippingPage from "pages/ShippingPage";
import Register from "pages/Register";
import Detail from "pages/Detail";
import Profil from "pages/Profil";
import LandingPage from "pages";
import Login from "pages/Login";

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
    path: "/detail",
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
]);
const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
