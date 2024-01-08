import {
    RouterProvider,
    createBrowserRouter,
    Link,
    Outlet
} from "react-router-dom";

import "./index.scss";
import Home from "./Home";
import App from "./App";

export default function Router() {
    return <RouterProvider router={router} />;
}

function Nav() {
    return (
        <>
        <div className="nav">
            <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/users"><li>Users</li></Link>
            </ul>
        </div>
        <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "users",
                element: <App />
            }
        ]
    }
])