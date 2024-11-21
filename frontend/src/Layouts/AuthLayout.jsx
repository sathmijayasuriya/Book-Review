import { Box, CssBaseline, Grid2 } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAuth from "../Components/Headers/HeaderAuth";
import Footer from "../Components/Footers/Footer";

const AuthLayout = () => {
  return (
    <>
      <CssBaseline />
      <HeaderAuth />
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          bgcolor: "background.default",
        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Grid2>
    </>
  );
};

export default AuthLayout;
