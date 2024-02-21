import React, { useCallback, useEffect, useState } from "react";
import { getData } from "../../services/getUsers";
import { deleteUser } from "../../services/getUsers";
import UsersListItem from "./UsersListItem";
import "./style.sass";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let arrayOfUsers = await getData();
      setUsers(arrayOfUsers);
    })();
  }, []);

  const removeUser = useCallback(async (id) => {
    await deleteUser(id);
    setUsers((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  return (
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
  );
}
