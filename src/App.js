import Login from "./pages/login/Logincomponent";
import PasswordReset from "./pages/password-reset/PasswordReset";
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import AddProduct from "./pages/products/AddProduct";
import Category from "./pages/category/Category";
import EditProduct from "./pages/edit-product/EditProduct";

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
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/product/new">
            <AddProduct />
          </Route>
          <Route path="/product/:_id">
            <EditProduct />
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
