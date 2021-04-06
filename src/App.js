import Login from "./pages/login/Logincomponent";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dlayout from "./components/layout/Defaultlayout";
import Dboard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dboard />
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
