import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./components/Auth/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider isSignedIN={true}>
    <RouterProvider router={routes} />
  </AuthProvider>
);
