import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ isSignedIN, children }) => {
  const [user] = useState(isSignedIN ? { id: 1 } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default AuthProvider;
