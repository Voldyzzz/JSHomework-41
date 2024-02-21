import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export default function UsersListItem({ name, id, removeUser }) {
  return (
    <ListItem>
      {name}
      <Link to={`/${id}`}>
        <Button className='btn' size='small' variant='contained'>
          Edit
        </Button>
      </Link>
      <Button
        onClick={() => removeUser(id)}
        className='btn'
        size='small'
        variant='contained'
        color='error'
      >
        Delete
      </Button>
    </ListItem>
  );
}
