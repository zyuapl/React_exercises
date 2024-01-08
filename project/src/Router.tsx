import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import "./index.scss";
import Home from "./Home";
import UserList from "./User/UserList";
import Form from "./Form/Form";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import App from "./App";


axios('http://localhost:8000/users')
.then((response) => {
    console.log(response.data);
}).catch(err => console.error(err));

export default function Router() {
    return <RouterProvider router={router} />;
}



const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <UserContextProvider>
        <App />
        </UserContextProvider>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "users",
                element: <UserList />
            },
            {
                path: "add",
                element: <Form />
            }
        ]
    }
])