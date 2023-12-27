import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { RouterLink } from "../common/router-link";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUserProfile } from "../../features/auth/userSlice";

const settings = ["Profile", "Logout"];
const StudentNav = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const user = useAppSelector((state) => state.user);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
          <Box sx={{ flexGrow: 0 }}>
            {user.loading ? (
              <span>Loading</span>
            ) : (
              <>
                <Typography
                  variant="h6"
                  textAlign="center"
                  component="span"
                  sx={{ mr: 1 }}
                >
                  {user?.user?.first_name} {user?.user?.last_name}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user?.user?.first_name}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNav;
