import "./App.css";
import User from "./pages/User";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
