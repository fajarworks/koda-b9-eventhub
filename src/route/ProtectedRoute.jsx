import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute({allowedRoles}) {
  const isLoggedIn = useSelector(state => state.auth.auth)

  if (!isLoggedIn) {
    return <Navigate to="/explore" replace />;
  }
  if (!isLoggedIn.role?.includes(allowedRoles)) {
    return <Navigate to="/explore" replace />
  }
  return <Outlet />;
}

export default ProtectedRoute;
