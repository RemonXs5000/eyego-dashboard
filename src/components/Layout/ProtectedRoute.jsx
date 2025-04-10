import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthenticationContext";


const ProtectedRoute = ({children}) => {
  const { userEmail } = useAuth();
  const location = useLocation();
  if (!userEmail) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoute;