import React from "react";
import TextField from "@mui/material/TextField";

export default function Street({ liftStreet }) {
  return (
    <TextField
      onChange={(e) => liftStreet(e.target.value)}
      id='outlined-basic'
      label='Street'
      variant='outlined'
    />
  );
}
