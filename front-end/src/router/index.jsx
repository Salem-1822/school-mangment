import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home";
import Layout from "../Layout/Layout.jsx";
import StudentDashboardLayout from "../Layout/StudentDashboardLayout.jsx";
import StudentDashboard from "../components/Students/StudentDashboard.jsx";

export const STUDENT_DASHBOARD_ROUTE = "/student/dashboard";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/login",
                element: <Login />,
            },

            {
                path: STUDENT_DASHBOARD_ROUTE,
                element: <StudentDashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <StudentDashboard />,
                    },
                ],
            },
        ],
    },
]);