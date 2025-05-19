import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken); // Directly get the token value
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  if (role === "admin") {
    if (!token) {
      return <Navigate to="/login" replace={true} />;
    }
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
