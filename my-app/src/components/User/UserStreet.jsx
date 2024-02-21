import React from "react";
import TextField from "@mui/material/TextField";

export default function UserStreet({ street }) {
  return (
    <div className='wrapper'>
      <p>Street: {street}</p>
      <TextField
        id='outlined-basic'
        label='Enter new street'
        variant='outlined'
      />
    </div>
  );
}
