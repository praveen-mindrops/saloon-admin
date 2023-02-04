import { Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Logo from "../../Assets/SpaalonLogoRed.jpg";
import LoginIcon from "@mui/icons-material/Login";
import MyModal from "../Utils/MyModal";
import LoginPage from "../Auth/LoginPage";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      sx={(theme) => ({
        height: "100%",
        width: "100%",
        position: "relative",
        boxShadow: `0 12px 24px ${theme.palette.shadow.navBar}`,
        bgcolor: "background.navBar",
        overFlow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Grid
          component="img"
          src={Logo}
          sx={{
            width: "150px",
            // borderRadius: "6px",
          }}
        />
      </Grid>
      <Grid
        sx={{
          pr: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Profile</Typography>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => {
            setOpen(true);
          }}
        >
          <LoginIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <LocalMallIcon />
        </IconButton>
      </Grid>
      <MyModal open={open} setOpen={setOpen}>
        <LoginPage
          //   mode={mode}
          setOpen={setOpen}
          //   data={current}
          //   setCheck={setCheck}
          //   HandelDelete={(id) => {
          //     setOpen(false);
          //     setOpen1(true);
          //     setDel(id);
          //   }}
        />
      </MyModal>
    </Grid>
  );
}
