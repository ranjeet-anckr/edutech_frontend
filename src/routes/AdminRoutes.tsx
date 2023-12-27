import { Outlet } from "react-router-dom";
import { STRING } from "../constants";
import { getDataFromLocalStorage } from "../utils/helper";
import UnAuthorized from "../components/error/UnAuthorized";

const AdminRoutes = () => {
  const role = getDataFromLocalStorage(STRING.USER_ROLE);

  return role === "admin" ? <Outlet /> : <UnAuthorized />;
};

export default AdminRoutes;
