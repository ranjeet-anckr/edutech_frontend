import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import StudentDashboard from "../pages/student/StudentDashboard";
import RegisterPage from "../pages/auth/RegisterPage";
import Login from "../pages/auth/Login";
import AuthLayout from "../layout/auth/AuthLayout";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/home/Home";
import TermCondition from "../pages/TermCondition";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />


        </Route>
        <Route>
            <Route path="/terms-and-conditions" element={<TermCondition/>} />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            }
          />
          <Route path="/" element={<Home/>}/>
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
