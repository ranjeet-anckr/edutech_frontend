import AuthLayout from "./layout/auth/AuthLayout";
import RegisterPage from "./pages/auth/RegisterPage"
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./theme/theme";
import  { Toaster } from 'react-hot-toast';



const App = () => {
  return (
    <div>
      	<ThemeProvider theme={theme}>
        <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    }}}
/>
        <CssBaseline />
        <AuthLayout>
        <RegisterPage/>
        </AuthLayout>
      
        </ThemeProvider>
      
    </div>
  )
}

export default App