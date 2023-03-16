import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/defaultLayout";
import GuestLayout from "./components/guestLayout";
import Dashboard from "./views/Dashboard";
import Download from "./views/Download";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
{
    path: '/',
    element: <DefaultLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Navigate to="/" />
        },
        {
            path: '/home',
            element: <Dashboard />
        },
        {
            path: '/surveys',
            element: <Surveys/>
        },
    ]
},
{
    path: '/',
    element: <GuestLayout />,
    children: [
        {
    path: '/login',
    element: <Login />
},
{
    path: '/signup',
    element: <Signup />
},
{
    path: '/download-app',
    element: <Download />
},
    ]
}
])

export default router;