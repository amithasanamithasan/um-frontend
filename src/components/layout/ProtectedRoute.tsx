import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCurrentToken, logout } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRouteProps = {
  children: ReactNode;
  role?: string;
};

interface TUser {
  role: string;
}

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as TUser | null;
  }
  console.log(user);

  const dispatch = useAppDispatch();

  if (!token || !user) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (role && role !== user.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
