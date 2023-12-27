import { Outlet } from "react-router-dom";
import { STRING } from "../constants";
import { getDataFromLocalStorage } from "../utils/helper";
import UnAuthorized from "../components/error/UnAuthorized";
import StudentLayout from "../layout/studentLayout/StudentLayout";

const StudentRoutes = () => {
  const role = getDataFromLocalStorage(STRING.USER_ROLE);

  return role === "student" ? (
    <StudentLayout>
      {" "}
      <Outlet />{" "}
    </StudentLayout>
  ) : (
    <UnAuthorized />
  );
};

export default StudentRoutes;
