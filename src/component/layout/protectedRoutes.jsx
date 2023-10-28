import { Navigate, Outlet } from "react-router-dom";


// const useAuth = () => {
//   const user = { loggedIn: true };
//   return user && user.loggedIn;
// };

const ProtectedRoutes = () => {
  // const isAuth = useAuth();
  // const token = sessionStorage.getItem("userData");
  // return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;