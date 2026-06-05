import { Navigate, Outlet, useLocation } from "react-router";

export const Auth = ({ store, redirect }) => {
  const { token } = store();
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to={redirect} state={{ from: location }} replace />;
};

export const UnAuth = ({ store, redirect }) => {
  const { token } = store();
  const location = useLocation();

  return token ? <Navigate to={redirect} state={{ from: location }} replace /> : <Outlet />;
};
