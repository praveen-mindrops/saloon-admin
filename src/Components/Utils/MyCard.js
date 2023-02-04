import { Grid } from "@mui/material";
import React from "react";

const MyCard = React.forwardRef((props, ref) => {
  const { sx, ...val } = props;
  return (
    <Grid
      ref={ref}
      sx={{
        bgcolor: "background.paper",
        boxShadow: "0 .75rem 1.5rem rgba(18,38,63,.03);",
        borderRadius: "6px",
        ...sx,
      }}
      {...val}
    ></Grid>
  );
});

export default MyCard;
