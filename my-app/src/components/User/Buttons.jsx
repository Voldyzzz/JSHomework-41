import React from "react";
import Button from "@mui/material/Button";
export default function Buttons() {
  return (
    <div className='buttons-wrapper'>
      <Button variant='outlined' color='success'>
        Save
      </Button>
      <Button variant='outlined' color='error'>
        Cancel
      </Button>
    </div>
  );
}
