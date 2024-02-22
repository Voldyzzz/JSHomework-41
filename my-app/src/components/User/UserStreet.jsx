import React from "react";
import TextField from "@mui/material/TextField";

export default function UserStreet({ street, liftStreet }) {
  return (
    <div className='wrapper'>
      <p>Street: {street}</p>
      <TextField
        onChange={(e) => liftStreet(e.target.value)}
        id='outlined-basic'
        label='Enter new street'
        variant='outlined'
      />
    </div>
  );
}
