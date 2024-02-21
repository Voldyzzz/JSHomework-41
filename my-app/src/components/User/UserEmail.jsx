import React from "react";
import TextField from "@mui/material/TextField";

export default function UserEmail({ email }) {
  return (
    <div className='wrapper'>
      <p>Email: {email}</p>
      <TextField
        id='outlined-basic'
        label='Enter new email'
        variant='outlined'
      />
    </div>
  );
}
