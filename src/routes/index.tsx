import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);
const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
