import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { CourseFormValues } from "../../interface/interface";
import { courseValidationSchema } from "../../constants";
import { useAppDispatch } from "../../hooks/hooks";
import { addCourse } from "../../features/course/addCourseSlice";
import { getCourses } from "../../features/course/courseSlice";

const AddCourseForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      courseName: "",
      description: "",
      courseImg: "",
      courseDiscount: 0,
      courseCategories: "",
      coursePrice: 0,
      coursePdf: "",
    } as CourseFormValues,
    validationSchema: courseValidationSchema,
    onSubmit: (values) => handleAddCourse(values),
  });
  const handleAddCourse = (values: CourseFormValues) => {
    dispatch(addCourse(values));
    dispatch(getCourses());
  };
  return (
    <div>
      <Typography variant="h5">Add New Courses</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Course Name"
            name="courseName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.courseName}
            error={
              formik.touched.courseName && Boolean(formik.errors.courseName)
            }
            helperText={formik.touched.courseName && formik.errors.courseName}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={4}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            fullWidth
            label="Course Image URL"
            name="courseImg"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.courseImg}
            error={formik.touched.courseImg && Boolean(formik.errors.courseImg)}
            helperText={formik.touched.courseImg && formik.errors.courseImg}
          />
          <TextField
            fullWidth
            label="Discount (%)"
            name="courseDiscount"
            type="number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.courseDiscount}
            error={
              formik.touched.courseDiscount &&
              Boolean(formik.errors.courseDiscount)
            }
            helperText={
              formik.touched.courseDiscount && formik.errors.courseDiscount
            }
          />
          <TextField
            fullWidth
            label="Categories"
            name="courseCategories"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.courseCategories}
            error={
              formik.touched.courseCategories &&
              Boolean(formik.errors.courseCategories)
            }
            helperText={
              formik.touched.courseCategories && formik.errors.courseCategories
            }
          />
          <TextField
            fullWidth
            label="Course Price"
            name="coursePrice"
            type="number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.coursePrice}
            error={
              formik.touched.coursePrice && Boolean(formik.errors.coursePrice)
            }
            helperText={formik.touched.coursePrice && formik.errors.coursePrice}
          />
          <TextField
            fullWidth
            label="Course PDF"
            name="coursePdf"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.coursePdf}
            error={formik.touched.coursePdf && Boolean(formik.errors.coursePdf)}
            helperText={formik.touched.coursePdf && formik.errors.coursePdf}
          />
        </Stack>
        <Button fullWidth type="submit" variant="contained">
          Add Course
        </Button>
      </form>
    </div>
  );
};

export default AddCourseForm;
