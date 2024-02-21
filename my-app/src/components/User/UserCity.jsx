import React from "react";
import TextField from "@mui/material/TextField";

export default function UserCity({ city }) {
  return (
    <div className='wrapper'>
      <p>City: {city}</p>
      <TextField
        id='outlined-basic'
        label='Enter new city'
        variant='outlined'
      />
    </div>
  );
}
