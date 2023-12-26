import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { createTypography } from "./create-typography";
import { createComponents } from "./create-components";

const theme = createTheme({
  direction: "ltr",
  palette: {
    common: {
      black: "black",
      white: "white",
    },
    primary: {
      main: "#6941c6",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },

  components: createComponents(),
  shape: {
    borderRadius: 8,
  },
  typography: createTypography(),
});

export default theme;
