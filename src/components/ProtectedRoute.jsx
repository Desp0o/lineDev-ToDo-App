import { useUser } from "@clerk/clerk-react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = useUser()

  return user
    ? <Outlet />
    : <Navigate to="/" state={{ from: location }} replace />
};

export default ProtectedRoute;