import {
  createTheme,
  CssBaseline,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { getDesignTheme } from "./Theme/DesignThem";
import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "../Layout/HomeSection";
import { ToastContainer } from "react-toastify";
import { SnackbarProvider } from "notistack";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTheme("light"))),
    []
  );

  return (
    <Grid sx={{ m: 0, p: 0 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeSection />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
        <ToastContainer />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
