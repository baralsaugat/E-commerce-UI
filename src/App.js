import Login from "./pages/login/Logincomponent";
import PasswordReset from "./pages/password-reset/PasswordReset";
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Dboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dboard />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/reset-password">
            <PasswordReset />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
