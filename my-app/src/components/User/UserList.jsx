import React, { useEffect, useState } from "react";
import {
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./style.sass";
import UserName from "./UserName";
import UserUsername from "./UserUsername";
import UserEmail from "./UserEmail";
import UserCity from "./UserCity";
import UserStreet from "./UserStreet";
import Buttons from "./Buttons";
import { getUserInfo } from "../../services/getUsers";
import { getUserLS } from "../../services/LocalStorage";

export default function UserList() {
  const [user, setUser] = useState({});
  const [newUserData, setNewUserData] = useState({});
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const { id } = useParams();
  const assignValues = ({
    name = "",
    username = "",
    email = "",
    address = {},
  }) => {
    setName(name);
    setUserName(username);
    setEmail(email);
    setStreet(address.street);
    setCity(address.city);
  };

  useEffect(() => {
    (async () => {
      let user = await getUserLS(id);
      user.length ? setUser(user[0]) : setUser({});
    })();
  }, []);

  useEffect(() => {
    assignValues(user);
  }, [user]);

  useEffect(() => {
    setNewUserData({
      id: +id,
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        city: city,
      },
    });
  }, [name, username, email, street, city]);

  return (
    <>
      {Object.keys(user).length ? (
        <div className='changeUserBlock'>
          <h2>Change data about user</h2>
          <UserName name={name} liftName={(value) => setName(value)} />
          <UserUsername
            username={username}
            liftUserName={(value) => setUserName(value)}
          />
          <UserEmail email={email} liftEmail={(value) => setEmail(value)} />
          <UserCity city={city} liftCity={(value) => setCity(value)} />
          <UserStreet
            street={street}
            liftStreet={(value) => setStreet(value)}
          />
          <Buttons
            newUserData={newUserData}
            changeUserInformation={(value) => setUser(value)}
          />
        </div>
      ) : (
        <h1>Data about user hasn`t founded</h1>
      )}
    </>
  );
}
