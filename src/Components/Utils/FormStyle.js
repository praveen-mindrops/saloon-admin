import { TextField } from "@mui/material";
import React from "react";

export default function FormStyle({ sx, ...props }) {
  return (
    <TextField
      size="small"
      sx={{
        width: "100%",
        fontSize: "18px",
        "&:hover:not(.Mui-disabled):not(.mui):before": {
          borderBottom: "2px solid",
          borderColor: "border.primary",
        },
        ...sx,
      }}
      {...props}
    />
  );
}
