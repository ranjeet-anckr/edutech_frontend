import { Outlet } from "react-router-dom";
import { STRING } from "../constants";
import { getDataFromLocalStorage } from "../utils/helper";
import UnAuthorized from "../components/error/UnAuthorized";

const TeacherRoutes = () => {
  const role = getDataFromLocalStorage(STRING.USER_ROLE);

  return role === "teacher" ? <Outlet /> : <UnAuthorized />;
};

export default TeacherRoutes;
