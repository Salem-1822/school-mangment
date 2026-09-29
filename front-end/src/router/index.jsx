import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home";
import Layout from "../Layout/Layout.jsx";
export const STUDENT_DASHBOARD_ROUTE = "/student/dashboard";
import GuestLayout from "../Layout/GuestLayout.jsx";
import StudentDashboardLayout from "../Layout/Student/StudentDashboardLayout.jsx";
import StudentDashboard from "../components/Students/StudentDashboard.jsx";
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"*",
                element: <h1> 404 not found</h1>
            }
        ]
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login/>
            }
        ]
    },
    {
        element: <StudentDashboardLayout />,
        children: [
            {
                path: STUDENT_DASHBOARD_ROUTE,
                element: <StudentDashboard/>
            }
        ]
    }
]);