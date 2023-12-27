import type { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flex: "1 1 auto",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "neutral.800",
          backgroundImage: 'url("src/assets/gradient-bg.svg")',
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          color: "common.white",
          display: "flex",
          flex: {
            xs: "0 0 auto",
            md: "1 1 auto",
          },
          justifyContent: "center",
          p: {
            xs: 4,
            md: 8,
          },
        }}
      >
        <Box maxWidth="md">
          <Typography sx={{ mb: 1 }} variant="h4">
            Welcome to EduTech
          </Typography>
          <Typography sx={{ mb: 4 }}>
            A professional kit that comes with ready-to-use MUI components
            developed with one common goal in mind, help you build faster &
            beautiful applications.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Join 6,000+ forward-thinking companies:
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            gap={4}
            sx={{
              color: "text.primary",
              "& > *": {
                color: "neutral.400",
                flex: "0 0 auto",
              },
            }}
          >
            {/* <LogoSamsung />
            <LogoVisma />
            <LogoBolt />
            <LogoAws />
            <LogoAccenture />
            <LogoAtt /> */}
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          flex: {
            xs: "1 1 auto",
            md: "0 0 auto",
          },
          flexDirection: "column",
          justifyContent: {
            md: "center",
          },
          maxWidth: "100%",
          p: {
            xs: 4,
            md: 4,
          },
          width: {
            md: 600,
          },
        }}
      >
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};

export default AuthLayout;
