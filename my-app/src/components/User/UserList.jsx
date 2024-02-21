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

export default function UserList() {
  const [user, setUser] = useState({});
  const param = useParams();
  const { name, username, email, address = {} } = user;
  console.log(address);
  const { street, city } = address;

  useEffect(() => {
    (async () => {
      let user = await getUserInfo(param.id);
      setUser(user);
    })();
  }, []);

  return (
    <div className='changeUserBlock'>
      <h2>Change data about user</h2>
      <UserName name={name} />
      <UserUsername username={username} />
      <UserEmail email={email} />
      <UserCity city={city} />
      <UserStreet street={street} />
      <Buttons />
    </div>
  );
}
