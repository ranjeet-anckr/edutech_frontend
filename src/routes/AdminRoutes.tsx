import { Outlet } from "react-router-dom";
import { STRING } from "../constants";
import { getDataFromLocalStorage } from "../utils/helper";
import UnAuthorized from "../components/error/UnAuthorized";
import AdminLayout from "../layout/adminLayout/AdminLayout";

const AdminRoutes = () => {
  const role = getDataFromLocalStorage(STRING.USER_ROLE);

  return role === "admin" ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <UnAuthorized />
  );
};

export default AdminRoutes;
