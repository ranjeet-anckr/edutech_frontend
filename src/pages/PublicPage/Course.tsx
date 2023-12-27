import CourseCard from "../../components/common/CourseCard";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { getCourses } from "../../features/course/courseSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Course = () => {
  const dispatch = useAppDispatch();
  const courseState = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <Grid container spacing={2}>
      {courseState.loading && <p>Loading...</p>}
      {courseState.error && <p>Error: {courseState.error}</p>}
      {Array.isArray(courseState.course) &&
        courseState.course.map((course, index) => (
          <Grid key={index.toString()} item xs={12} sm={6} md={4} lg={3}>
            <CourseCard course={course} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Course;
