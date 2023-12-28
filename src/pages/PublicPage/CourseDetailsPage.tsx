import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCourseDetails } from "../../features/course/courseDetailsSlice";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomAccordion from "../../components/common/CustomAccordion";

const CourseDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const courseId: number = parseInt(id);
  const courseState = useAppSelector((state) => state.courseDetails);
  const { loading, error, courseDetails } = courseState;

  const getdata = async () => {
    dispatch(getCourseDetails(courseId));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading.....</h2>
      ) : (
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Typography variant="h3">{courseDetails?.courseName}</Typography>
              <Typography variant="subtitle1">
                {courseDetails?.description}
              </Typography>

              {/* Map through modules and render CustomAccordion for each module */}
              {courseDetails?.modules.map((module: any) => (
                <CustomAccordion
                  key={module.id}
                  title={module.moduleTopic}
                  content={
                    <ul>
                      {module.subModules.map((subModule: any) => (
                        <li key={subModule.id}>{subModule.subTopic}</li>
                      ))}
                    </ul>
                  }
                />
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              Hello
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default CourseDetailsPage;
