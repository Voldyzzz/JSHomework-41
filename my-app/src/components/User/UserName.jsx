import React from "react";
import TextField from "@mui/material/TextField";

export default function UserName({ name }) {
  return (
    <div className='wrapper'>
      <p>Name: {name}</p>
      <TextField
        id='outlined-basic'
        label='Enter new name'
        variant='outlined'
      />
    </div>
  );
}
