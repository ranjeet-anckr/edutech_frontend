import { Outlet } from "react-router-dom";
import PublicNav from "../../components/navbar/PublicNav";
import { Box, Container } from "@mui/material";

const PublicLayout = () => {
  return (
    <div>
      <Container>
        <PublicNav />
      </Container>
      <Box sx={{ margin: 4 }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default PublicLayout;
