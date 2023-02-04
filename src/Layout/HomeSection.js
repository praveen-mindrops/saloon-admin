import { Grid } from "@mui/material";
import React, { useState } from "react";
// import NavBar from "../Components/Common/NavBar";
import Header from "../Components/Common/Header";

function HomeSection() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return "...loading";
  } else {
    return (
      <Grid
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: "#bf982e",
          display: "flex",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            height: "100%",
            // transition: "width 0.4s",
          }}
        >
          <Grid sx={{ width: "100%", height: "60px" }}>
            {/* <NavBar /> */}
            <Header />
          </Grid>
          <Grid
            sx={{
              width: "100%",
              height: "calc(100% - 60px)",
              overflowX: "hidden",
              overflowY: "auto",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                margin: "2px px",
                mb: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                border: "4px solid",
                borderColor: "border.scroll",
                borderRadius: "20px",
              },
            }}
          ></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default HomeSection;
