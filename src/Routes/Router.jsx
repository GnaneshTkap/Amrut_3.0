import ProtectRoutes from "../components/Auth/ProtectRoutes";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/Auth/LoginPage";
import Dashboard from "@/components/Dashboard/Dashboard";
import HrmsLayout from "@/components/AmrutPages/hrms/Layout";
import { ErrorPage } from "@/components/ErrorForm/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <ProtectRoutes>
        <Layout />
      </ProtectRoutes>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      { path: "/hrms/overtime", element: <HrmsLayout /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);
