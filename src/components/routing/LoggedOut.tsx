import { getCurrentUser, useAuth } from "@/providers/auth-provider";
import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const LoggedOut = () => {
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
    <Navigate to="/menu" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default LoggedOut;
