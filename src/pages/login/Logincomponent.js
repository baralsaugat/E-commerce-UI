import React from "react";
import "./login.style.css";
import { LoginForm } from "../../components/login-form/LoginForm";

const Logincomponent = () => {
  return (
    <div className="login-page bg-dark">
      <LoginForm></LoginForm>
    </div>
  );
};

export default Logincomponent;
