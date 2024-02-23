import React from "react";
import TextField from "@mui/material/TextField";

export default function Email({ liftEmail }) {
  return (
    <TextField
      onChange={(e) => liftEmail(e.target.value)}
      id='outlined-basic'
      label='Email'
      variant='outlined'
    />
  );
}
