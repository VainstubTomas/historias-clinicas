import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFFF", height: "100px"}}>
      <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
        height: "100%", // Asegura que ocupa toda la altura de la Navbar
      }}>
        <Box
         component="img"
         src={logo}
         alt="Logo"
         sx={{ height: 50 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
