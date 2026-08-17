import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const [userActive] = useLocalStorage("userActive", null);
  if (!userActive) {
    return <Navigate to="/explore" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
