import React from "react";
import TextField from "@mui/material/TextField";

export default function UserName({ name, liftName }) {
  return (
    <div className='wrapper'>
      <p>Name: {name}</p>
      <TextField
        onChange={(e) => liftName(e.target.value)}
        id='outlined-basic'
        label='Enter new name'
        variant='outlined'
      />
    </div>
  );
}
