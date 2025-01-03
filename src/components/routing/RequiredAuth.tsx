import { getCurrentUser, useAuth } from "@/providers/auth-provider";
import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const { setUser } = useAuth();
  let authorized = !!localStorage.getItem("accessToken");

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    if (authorized) {
      getUser();
    }
  }, []);

  return authorized ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
