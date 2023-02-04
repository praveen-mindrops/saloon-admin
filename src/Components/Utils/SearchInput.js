import { TextField } from "@mui/material";
import React, { useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchInput({ sx, ...props }) {
  const myRef = useRef("");
  return (
    <TextField
      size="small"
      type="search"
      InputProps={{
        ref: myRef,
        startAdornment: (
          <SearchOutlinedIcon
            onClick={() => myRef.current.children[1].focus()}
            sx={{ width: "28px", p: "0px 3px", opacity: "0.7" }}
          />
        ),
        sx: {
          borderRadius: "30px",
        },
      }}
      {...props}
    />
  );
}
