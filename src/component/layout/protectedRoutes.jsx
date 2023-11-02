import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
  const token = sessionStorage.getItem("userData");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;