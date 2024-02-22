import React from "react";
import TextField from "@mui/material/TextField";

export default function UserCity({ city, liftCity }) {
  return (
    <div className='wrapper'>
      <p>City: {city}</p>
      <TextField
        onChange={(e) => liftCity(e.target.value)}
        id='outlined-basic'
        label='Enter new city'
        variant='outlined'
      />
    </div>
  );
}
