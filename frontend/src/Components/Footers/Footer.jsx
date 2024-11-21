import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/Logo.svg";

const Footer = () => {
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center", 
          display: "flex", 
          width: "100%",
          padding: 0,
        }}
      >
        <Box
          component={Link}
          to={"/"}
          sx={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%",
          }}
        >
          <img alt="Logo" src={logo} height={32} />
        </Box>
      </Toolbar>
    </>
  );
};

export default Footer;
