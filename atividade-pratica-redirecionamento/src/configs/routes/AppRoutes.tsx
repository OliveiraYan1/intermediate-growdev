import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { TabelaPagina } from "../../pages/TabelaPagina";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/TabelaPagina",
        element: <TabelaPagina />
    },
    {
        path: "/login",
        element: <Login />
    }
])

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;