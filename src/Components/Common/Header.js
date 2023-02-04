import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../../Assets/SpaalonLogoRed.jpg";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DrawerComp from "./DrawerComp";
// import MyModal from "../Utils/MyModal";
// import Login from "../Auth/LoginPage";

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const pages = ["Hair", "Body", "Spa", "Nails", "Face"];
  const loginItem = (
    <IconButton
      color="primary"
      aria-label="add to shopping cart"
      onClick={() => {
        setOpen(true);
      }}
    >
      <LoginIcon />
    </IconButton>
  );
  return (
    <>
      <AppBar sx={{ background: "#FFFFFF" }}>
        <Toolbar>
          <Grid
            component="img"
            src={Logo}
            sx={{
              width: "150px",
            }}
          />
          {isMatch ? (
            <Grid sx={{ marginLeft: "auto" }}>
              <IconButton color="primary" aria-label="add to shopping cart">
                <LocalMallIcon />
              </IconButton>
              <DrawerComp menuItem={pages} buttons={loginItem} />
            </Grid>
          ) : (
            <>
              <Tabs sx={{ marginLeft: "auto" }} textColor="primary">
                {pages.map((el, i) => (
                  <Tab label={el} key={el} />
                ))}
              </Tabs>
              {loginItem}
              <IconButton color="primary" aria-label="add to shopping cart">
                <LocalMallIcon />
              </IconButton>
            </>
          )}
          {/* 
          <IconButton color="primary" aria-label="add to shopping cart">
            <LocalMallIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {/* <MyModal open={open} setOpen={setOpen}>
        <Login
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
      </MyModal> */}
    </>
  );
};

export default Header;
