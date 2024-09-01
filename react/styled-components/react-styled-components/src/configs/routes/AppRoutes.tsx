import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import { AboutUs } from "../../pages/About";
import { Error } from "../../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  // ... criando mais objetos
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
