import { useFormik } from 'formik';
import * as Yup from 'yup';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RouterLink } from '../../components/common/router-link';
import { Seo } from '../../components/common/Seo';
import { useDispatch } from "react-redux";
import { authenticateUser } from '../../features/auth/authSlice';


interface Values {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  contact_no: string;
  city: string;
  policy: boolean;
}

const initialValues: Values = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  contact_no: '',
  city: '',
  policy: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  first_name: Yup.string().max(255).required('First Name is required'),
  last_name: Yup.string().max(255).required('Last Name is required'),
  password: Yup.string().min(7).max(255).required('Password is required'),
  contact_no: Yup.string().max(15).required('Contact Number is required'),
  city: Yup.string().max(255).required('City is required'),
  policy: Yup.boolean().oneOf([true], 'This field must be checked'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (val) => handleSubmit(val),
  });
const handleSubmit=(val:Values)=>{
  const newValue = { ...val, isSignup: true }; 
  dispatch(authenticateUser(newValue) as any);
  
}
  
  return (
    <>
      <Seo title="Register" />
      <div>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href="/"
            sx={{
              alignItems: 'center',
              display: 'inline-flex',
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">Dashboard</Typography>
          </Link>
        </Box>
        <Stack
          sx={{ mb: 4 }}
          spacing={1}
        >
          <Typography variant="h5">Register</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Already have an account? &nbsp;
            <Link
              href="/login"
              underline="hover"
              component={RouterLink}
              variant="subtitle2"
            >
              Log in
            </Link>
          </Typography>
        </Stack>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.first_name && formik.errors.first_name)}
              fullWidth
              helperText={formik.touched.first_name && formik.errors.first_name}
              label="First Name"
              name="first_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.first_name}
            />
            <TextField
              error={!!(formik.touched.last_name && formik.errors.last_name)}
              fullWidth
              helperText={formik.touched.last_name && formik.errors.last_name}
              label="Last Name"
              name="last_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.last_name}
            />
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
            <TextField
              error={!!(formik.touched.contact_no && formik.errors.contact_no)}
              fullWidth
              helperText={formik.touched.contact_no && formik.errors.contact_no}
              label="Contact Number"
              name="contact_no"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.contact_no}
            />
            <TextField
              error={!!(formik.touched.city && formik.errors.city)}
              fullWidth
              helperText={formik.touched.city && formik.errors.city}
              label="City"
              name="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </Stack>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
            }
            label={
              <Typography color="text.secondary" variant="body2">
                I have read the{' '}
                <Link component="a" href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </Link>
              </Typography>
            }
          />
          {!!(formik.touched.policy && formik.errors.policy) && (
            <FormHelperText error>{formik.errors.policy}</FormHelperText>
          )}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
