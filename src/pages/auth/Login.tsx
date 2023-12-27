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
import { LOGIN_VALIDATION_SCHEMA } from "../../constants";
import { useNavigate } from "react-router-dom";
import { LoginValueType } from "../../interface/interface";
import { loginInitialValues } from "../../constants/initialState";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (val) => {
      handleLogin(val);
    },
  });

  const handleLogin = async (val: LoginValueType) => {
    const newValue = { ...val, isSignup: false };
    try {
      const res = await dispatch(authenticateUser(newValue) as any);
      console.log("res", res.payload.data.role);
      switch (res.payload.data.role) {
        case "student":
          navigate("/student-dashboard");
          break;

        case "teacher":
          navigate("/teacher-dashboard");
          break;

        case "admin":
          navigate("/admin-dashboard");
          break;

        default:
          navigate("/");
          break;
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
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
