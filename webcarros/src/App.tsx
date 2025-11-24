import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/home";
import { Register } from "./pages/Register/Index";
import { Dashboard } from "./pages/Dashboard";
import { New } from "./pages/Dashboard/new";
import { CarDetail } from "./pages/Car/Index";
import { Private } from "./routes/Private";

import { Layout } from "./Components/layout";


const router = createBrowserRouter([
  {
    element:  <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/car/:id",
        element: <CarDetail />
      },
      {
        path: "/dashboard",
        element: <Private><Dashboard /></Private>
      }
      ,
      {
        path: "/dashboard/new",
        element: <Private><New /></Private>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

export { router }