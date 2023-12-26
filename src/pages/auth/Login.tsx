import * as Yup from "yup";
import { useFormik } from "formik";
import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { RouterLink } from "../../components/common/router-link";
import { Seo } from "../../components/common/Seo";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../features/auth/authSlice";

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (val)=> {handleLogin(val)},
  });

  const handleLogin=(val:Values)=>{
    const newValue = { ...val, isSignup: false }; 
    dispatch(authenticateUser(newValue) as any);

  }
  return (
    <>
      <Seo title="Login" />
      <div>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href="/"
            sx={{
              alignItems: "center",
              display: "inline-flex",
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">Dashboard</Typography>
          </Link>
        </Box>
        <Stack sx={{ mb: 4 }} spacing={1}>
          <Typography variant="h5">Log in</Typography>
          <Typography color="text.secondary" variant="body2">
            Don&apos;t have an account? &nbsp;
            <Link
              href="/register"
              underline="hover"
              component={RouterLink}
              variant="subtitle2"
            >
              Register
            </Link>
          </Typography>
        </Stack>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
            />
            <TextField
              error={!!(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
            />
          </Stack>
          <Button
            fullWidth
            sx={{ mt: 3 }}
            size="large"
            type="submit"
            variant="contained"
          >
            Login Now
          </Button>
          <Box sx={{ mt: 3 }}>
            <Link href="#" underline="hover" variant="subtitle2">
              Forgot password?
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Login;
