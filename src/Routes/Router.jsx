import ProtectRoutes from "../components/Auth/ProtectRoutes";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/Auth/LoginPage";
import Dashboard from "@/components/Dashboard/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoutes>
        <Layout />
      </ProtectRoutes>
    ),
    children: [{ index: true, element: <Dashboard /> }],
  },
  { path: "/login", element: <LoginPage /> },
]);
