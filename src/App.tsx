import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

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
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <CssBaseline />

        <AppRoutes />
      </ThemeProvider>
    </div>
  );
};

export default App;
