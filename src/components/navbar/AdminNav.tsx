import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { RouterLink } from "../common/router-link";
import AccountSection from "./AccountSection";

const StudentNav = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            margin: 0,
          }}
        >
          <Box>
            <Typography variant="h5" component="div">
              Welcome to the Admin Dashboard
            </Typography>
          </Box>
          <AccountSection />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNav;
