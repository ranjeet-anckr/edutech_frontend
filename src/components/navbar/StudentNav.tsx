import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { RouterLink } from "../common/router-link";
import AccountSection from "./AccountSection";

const StudentNav = () => {
  return (
    <div>
      <AppBar position="sticky" sx={{ backdropFilter: "blur(10px)" }}>
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
              <img
                src="src/assets/img/logo.svg"
                alt="logo"
                width="100px"
                height="40px"
              />
            </IconButton>
            <Button
              color="inherit"
              component={RouterLink}
              href="/student-dashboard"
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              href="/student-my-courses"
            >
              My Course
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              href="/student-my-courses"
            >
              Courses
            </Button>
          </Box>
          <AccountSection />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNav;
