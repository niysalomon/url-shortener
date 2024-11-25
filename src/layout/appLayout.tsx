import { Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import SideBar from "../components/sideBar";
import Header from "./header";

const AppLayout = ({
  isAdmin,
  setIsAdmin,
  children,
}: {
  isAdmin: string;
  setIsAdmin: (_value: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: " #10141F",

        overflow: "hidden",
        height: "100vh",
      }}
    >
      <SideBar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Box>
          <Header />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
