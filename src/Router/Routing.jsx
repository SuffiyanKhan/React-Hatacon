import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    }
]);

function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation