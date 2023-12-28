import { Box, Drawer, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const theme = useTheme();

  // Define your menu items as an array of objects
  const menuItems = [
    { name: "Dashboard", path: "/admin-dashboard" },
    { name: "CourseList", path: "/admin-course" },
    { name: "Teachers", path: "/admin-teacher-list" },
  ];

  return (
    <Box>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : "transparent",
              //   "&:hover": {
              //     backgroundColor: theme.palette.primary.main,
              //   },
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
              },
              "&.Mui-selected:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textDecoration: "none",
                p: 0.5,
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                color:
                  location.pathname === item.path
                    ? theme.palette.primary.contrastText
                    : "inherit",
              }}
            >
              {item.name}
            </Typography>
          </MenuItem>
        ))}
      </Drawer>
    </Box>
  );
};

export default AdminSidebar;
