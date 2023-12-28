import { useEffect, useState } from "react";
import CustomTable from "../../components/table/CustomTable";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCourses } from "../../features/course/courseSlice";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CustomModal from "../../components/common/CustomModal";
import AddCourseForm from "../../components/admin/AddCourseForm";

const AdminCourseList = () => {
  const dispatch = useAppDispatch();
  const courseState = useAppSelector((state) => state.course);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Course List</Typography>
        <Button variant="contained" onClick={handleModalOpen}>
          {" "}
          Add New Course
        </Button>
      </Box>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Add New Course"
      >
        <AddCourseForm />
      </CustomModal>
      {courseState?.loading ? (
        <h3>Loading..</h3>
      ) : (
        <CustomTable data={courseState?.course} />
      )}
    </div>
  );
};

export default AdminCourseList;
