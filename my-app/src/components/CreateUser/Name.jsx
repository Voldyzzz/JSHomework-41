import React from "react";
import TextField from "@mui/material/TextField";

export default function Name({ liftName }) {
  return (
    <TextField
      onChange={(e) => liftName(e.target.value)}
      id='outlined-basic'
      label='Name'
      variant='outlined'
    />
  );
}
