import { ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";

export default function MyDatePicker(props) {
  return (
    <ButtonBase
      disableRipple
      onClick={() => {
        props.setOpen(true);
      }}
      sx={(theme) => ({
        display: "flex",
        height: "40px",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid",
        borderColor: `${theme.palette.contras.main}3b`,
        borderRadius: "4px",
        p: "7px 8px",
        width: props.fullWidth ? "100%" : "180px",
        position: "relative",
        "&:hover": {
          borderColor: `${theme.palette.border.primary}`,
        },
      })}
      ref={props.inputRef}
    >
      <Grid
        sx={{
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          position: "absolute",
          left: "-1px",
          border: props.open ? "2px solid" : "none",
          borderColor: "primary.main",
          borderRadius: "4px",
        }}
      ></Grid>
      <Typography variant="body1">{props.inputProps?.value}</Typography>
    </ButtonBase>
  );
}
