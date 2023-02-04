import { Grid, IconButton } from "@mui/material";
import React from "react";

export default function MyIconButton(props) {
  const { back, circle } = props;
  return (
    <Grid
      sx={(theme) => ({
        borderRadius: circle ? "50%" : "20%",
        bgcolor: back
          ? `${theme.palette.icon.error}2e`
          : `${theme.palette.icon.warning}2e`,
      })}
    >
      <IconButton size="small" color="warning" {...props}>
        {props.children}
      </IconButton>
    </Grid>
  );
}
