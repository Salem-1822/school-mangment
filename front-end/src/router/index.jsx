import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home";
import Register from "../pages/Register.jsx";
import Users from "../pages/users.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../Layout/Layout.jsx";
import Button from "../components/ui/button.jsx";

export const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/button",
    element:<Button/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path:"*",
    element: <NotFound/>
  }
    ]
  },

]);