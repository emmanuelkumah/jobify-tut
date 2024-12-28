import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form
        className="form"
        action="
      "
      >
        <Logo />
        <h2>Register</h2>
        <FormRow
          type="text"
          name="name"
          defaultValue="Emmanuel"
          labelText="First name"
        />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="Kumah"
          labelText="Last name"
        />
        <FormRow
          type="text"
          name="location"
          defaultValue="Accra"
          labelText="Your location"
        />
        <FormRow
          type="email"
          name="email"
          defaultValue="emea@gmail.com"
          labelText="Your email"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="emea@gmail.com"
          labelText="Your password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
