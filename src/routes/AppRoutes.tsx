import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import StudentDashboard from "../pages/student/StudentDashboard";
import RegisterPage from "../pages/auth/RegisterPage";
import Login from "../pages/auth/Login";
import AuthLayout from "../layout/auth/AuthLayout";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TermCondition from "../pages/TermCondition";
import PageNotFound from "../components/error/PageNotFound";
import StudentRoutes from "./StudentRoutes";
import TeacherRoutes from "./TeacherRoutes";
import AdminRoutes from "./AdminRoutes";
import About from "../pages/PublicPage/About";
import FreeClass from "../pages/PublicPage/FreeClass";
import Home from "../pages/PublicPage/Home";
import Course from "../pages/PublicPage/Course";
import PublicLayout from "../layout/PublicLayout/PublicLayout";
import MyCourses from "../pages/student/MyCourses";
import CourseDetailsPage from "../pages/PublicPage/CourseDetailsPage";
import { Box } from "@mui/material";
import AdminCourseLIst from "../pages/admin/AdminCourseLIst";

const AppRoutes = () => {
  return (
    <Box sx={{ background: "#f2f2f2", minHeight: "100vh" }}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<StudentRoutes />}>
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/student-my-courses" element={<MyCourses />} />
            MyCourses
          </Route>
          <Route element={<TeacherRoutes />}>
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-course" element={<AdminCourseLIst />} />
          </Route>
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/terms-and-conditions" element={<TermCondition />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<FreeClass />} />
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default AppRoutes;
