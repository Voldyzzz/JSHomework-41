import React from "react";
import TextField from "@mui/material/TextField";

export default function UserUsername({ username }) {
  return (
    <div className='wrapper'>
      <p>Username: {username}</p>
      <TextField
        id='outlined-basic'
        label='Enter new username'
        variant='outlined'
      />
    </div>
  );
}
