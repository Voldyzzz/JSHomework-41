import React from "react";
import TextField from "@mui/material/TextField";

export default function City({ liftCity }) {
  return (
    <TextField
      onChange={(e) => liftCity(e.target.value)}
      id='outlined-basic'
      label='City'
      variant='outlined'
    />
  );
}
