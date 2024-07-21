import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import App from "../App";
import Error from "../pages/404/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/yakyzas",
                element: <App />,
            }
        ],
        errorElement: <Error />
    },
]);

export default router