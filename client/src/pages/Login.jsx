import React from "react";
import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h3>Login</h3>
        <FormRow
          type="email"
          name="email"
          labelText="Your email"
          defaultValue="emma@gmail.com"
        />
        <FormRow
          type="password"
          name="passwword"
          labelText="Your password"
          defaultValue="123456"
        />
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a member yet
          <Link to="/register" className="member-btn">
            {" "}
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
