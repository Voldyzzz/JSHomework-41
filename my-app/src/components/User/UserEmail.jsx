import React from "react";
import TextField from "@mui/material/TextField";

export default function UserEmail({ email, liftEmail }) {
  return (
    <div className='wrapper'>
      <p>Email: {email}</p>
      <TextField
        onChange={(e) => liftEmail(e.target.value)}
        id='outlined-basic'
        label='Enter new email'
        variant='outlined'
      />
    </div>
  );
}
