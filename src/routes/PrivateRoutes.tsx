import { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../utils/helper";
import { STRING } from "../constants";

const PrivateRoutes: FC = () => {
  const token = getDataFromLocalStorage(STRING.ACCESS_TOKEN);
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth) {
  //     navigate(`/login?toRedirect=${location.pathname}`);
  //   }
  // }, [auth, location.pathname, navigate]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
