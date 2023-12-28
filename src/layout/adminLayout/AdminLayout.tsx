import Box from "@mui/material/Box";
import AdminNav from "../../components/navbar/AdminNav";
import AdminSidebar from "../../components/navbar/AdminSidebar";

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <AdminNav />
          <Box sx={{ p: 2 }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
