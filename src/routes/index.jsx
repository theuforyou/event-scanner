import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Institucion from '../pages/Institucion';
import Error404 from '../pages/Error404/index.tsx';
const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/Institucion/:institucionId',
        element: <Institucion />
    }


]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes