import { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes: FC = () => {
  const auth = false;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate(`/login?toRedirect=${location.pathname}`);
    }
  }, [auth, location.pathname, navigate]);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
