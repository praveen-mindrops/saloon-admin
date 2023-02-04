import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Pages } from "@mui/icons-material";

const DrawerComp = ({ menuItem, buttons }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Toolbar />
        <Divider />
        <List>
          {menuItem?.map((el, i) => (
            <ListItemButton key={el}>
              <ListItemText>{el}</ListItemText>
            </ListItemButton>
          ))}
          <ListItemButton>
            {/* <ListItemIcon></ListItemIcon> */}

            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton color="primary" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
