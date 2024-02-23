import React from "react";
import TextField from "@mui/material/TextField";

export default function UserName({ liftUserName }) {
  return (
    <TextField
      onChange={(e) => liftUserName(e.target.value)}
      id='outlined-basic'
      label='UserName'
      variant='outlined'
    />
  );
}
