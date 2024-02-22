import React from "react";
import Button from "@mui/material/Button";
import { changeUserLS } from "../../services/LocalStorage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Buttons({ changeUserInformation, newUserData }) {
  const { id } = useParams();
  const handleCancelButton = () => {
    window.location.href = "/";
  };

  const handleSaveButton = () => {
    changeUserInformation(newUserData);
    changeUserLS(id, newUserData);
    window.location.href = `/`;
  };
  return (
    <div className='buttons-wrapper'>
      <Button onClick={handleSaveButton} variant='outlined' color='success'>
        Save
      </Button>
      <Button onClick={handleCancelButton} variant='outlined' color='error'>
        Cancel
      </Button>
    </div>
  );
}
