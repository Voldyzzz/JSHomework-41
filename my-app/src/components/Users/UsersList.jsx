import React, { useCallback, useEffect, useState } from "react";
import { getUsersLS, deleteUserLS } from "../../services/LocalStorage";
import { deleteUser } from "../../services/getUsers";
import UsersListItem from "./UsersListItem";
import Button from "@mui/material/Button";
import "./style.sass";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let arrayOfUsers = getUsersLS();
    setUsers(arrayOfUsers);
  }, []);

  const removeUser = useCallback(async (id) => {
    await deleteUser(id);
    deleteUserLS(id);
    setUsers((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      {users ? (
        <>
          <ul>
            {users.map((item) => (
              <UsersListItem
                key={item.id}
                name={item.name}
                id={item.id}
                removeUser={removeUser}
              ></UsersListItem>
            ))}
          </ul>
          <Button variant='contained' color='secondary' href='/createuser'>
            Create new user
          </Button>
        </>
      ) : null}
    </>
  );
}
