import ProtectRoutes from "../components/Auth/ProtectRoutes";
import Layout from "../Layout";
import Login from "../components/Auth/Login";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoutes>
        <Layout />
      </ProtectRoutes>
    ),
    children: [],
  },
  { path: "/login", element: <Login /> },
]);
