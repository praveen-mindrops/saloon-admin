import { Box } from "@mui/material";
import React from "react";

const MyPaper = ({ sx, elevation, shadow, ...props }) => {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: !shadow
          ? `0px 4px 10px 6.5px ${theme.palette.current.main}20,0px -2px 10px 6.5px ${theme.palette.current.main}20,
        0px 1px 10px 0.5px ${theme.palette.contras.main}10,0px -1px 10px 0.5px ${theme.palette.contras.main}10,
        2px 2px 15px -8.5px ${theme.palette.primary.main}30,-2px -2px 15px -8.5px ${theme.palette.primary.main}30`
          : null,
        borderRadius: "6px",
        ...sx,
      })}
      {...props}
    ></Box>
  );
};

export default MyPaper;
