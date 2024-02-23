import React, { useEffect, useState } from "react";
import "./style.sass";
import uniqid from "uniqid";
import { addNewUserLS } from "../../services/LocalStorage";

import Button from "@mui/material/Button";
import Name from "./Name";
import UserName from "./UserName";
import Email from "./Email";
import City from "./City";
import Street from "./Street";

export default function CreateNewUser() {
  const [createdUser, setCreatedUser] = useState({});
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [id] = useState(uniqid());

  useEffect(() => {
    setCreatedUser({
      id: id,
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        city: city,
      },
    });
  }, [name, username, email, street, city]);

  const handleCreateUserButton = (createdUser) => {
    addNewUserLS(createdUser);
    window.location.href = `/`;
  };

  return (
    <div className='createUserBlock'>
      <Name liftName={(value) => setName(value)} />
      <UserName liftUserName={(value) => setUserName(value)} />
      <Email liftEmail={(value) => setEmail(value)} />
      <City liftCity={(value) => setCity(value)} />
      <Street liftStreet={(value) => setStreet(value)} />
      <Button
        onClick={() => handleCreateUserButton(createdUser)}
        style={{ margin: "10px" }}
        variant='contained'
        color='secondary'
      >
        Create User
      </Button>
    </div>
  );
}
