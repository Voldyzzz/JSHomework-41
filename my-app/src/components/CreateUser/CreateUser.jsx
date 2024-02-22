import React, { useState } from "react";
import "./style.sass";

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

  return (
    <div className='createUserBlock'>
      <Button style={{ margin: "10px" }} variant='contained' color='secondary'>
        Create User
      </Button>
    </div>
  );
}
