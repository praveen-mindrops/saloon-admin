import { Fade, Grid, Modal, ClickAwayListener } from "@mui/material";
import React from "react";

export default function MyModal(props) {
  const { open, setOpen } = props;
  return (
    <Modal
      hideBackdrop
      sx={{
        border: "none",
      }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      closeAfterTransition
    >
      <Fade in={open}>
        <Grid
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: `${theme.palette.contras.main}10`,
          })}
        >
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Grid>{props.children}</Grid>
          </ClickAwayListener>
        </Grid>
      </Fade>
    </Modal>
  );
}
