import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
      console.log("called");
    }
  }, [navigate, user]);

  return children;
}
