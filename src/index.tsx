import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import { AppProvider } from "./providers/appProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import "./i18n";
const theme =createTheme({
  zIndex: {
    modal: 1300, // Default zIndex for modal
    tooltip: 1500,
  },
});
const queryClient = new QueryClient();
ReactDOM.render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}> 
      <App />
      </ThemeProvider>
    </QueryClientProvider>
  </AppProvider>,
  document.getElementById("root")
);
