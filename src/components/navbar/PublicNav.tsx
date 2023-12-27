import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { RouterLink } from "../common/router-link";
import { Link } from "react-router-dom";

const PublicNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backdropFilter: "blur(10px)", borderRadius: 2 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            margin: 0,
          }}
        >
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <img
                  src="src/assets/img/logo.svg"
                  alt="logo"
                  width="100px"
                  height="40px"
                />
              </Link>
            </IconButton>
            <Button color="inherit" component={RouterLink} href="/course">
              Courses
            </Button>
            <Button color="inherit" component={RouterLink} href="/events">
              Free Classes
            </Button>
            <Button color="inherit" component={RouterLink} href="/about-us">
              About Us
            </Button>
          </Box>
          <Box>
            <Button color="inherit" component={RouterLink} href="/login">
              Login
            </Button>
            <Button color="inherit" component={RouterLink} href="/register">
              Register Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PublicNav;
