import React from "react";
import TextField from "@mui/material/TextField";

export default function UserUsername({ username, liftUserName }) {
  return (
    <div className='wrapper'>
      <p>Username: {username}</p>
      <TextField
        onChange={(e) => liftUserName(e.target.value)}
        id='outlined-basic'
        label='Enter new username'
        variant='outlined'
      />
    </div>
  );
}
