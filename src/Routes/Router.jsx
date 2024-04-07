import ProtectRoutes from "../components/Auth/ProtectRoutes";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/Auth/LoginPage";

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
  { path: "/login", element: <LoginPage /> },
]);
