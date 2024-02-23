import "./App.css";
import User from "./pages/User";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setUsersLS } from "./services/LocalStorage";
import { getData } from "./services/getUsers";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users == null) {
      (async () => {
        let arrayOfUsers = await getData();
        setUsersLS(arrayOfUsers);
      })();
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Users></Users>
          </Route>
          <Route path='/createuser'>
            <CreateUser></CreateUser>
          </Route>
          <Route path='/:id'>
            <User></User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
