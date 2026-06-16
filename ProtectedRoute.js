import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  // if NOT logged in
  if (isLoggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  // if logged in
  return children;
}

export default ProtectedRoute;