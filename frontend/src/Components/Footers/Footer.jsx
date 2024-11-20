import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/Logo.svg";

const Footer = () => {
  return (
    <>
      <Toolbar sx={{
        justifyContent: "center", // Centers the content horizontally
        display: "flex", // Ensures the children are in a flex container
      }}>
        <Box component={Link} to={"/"}>
          <img alt="Logo" src={logo} height={32} />
        </Box>
      </Toolbar>
    </>
  );
};

export default Footer;
