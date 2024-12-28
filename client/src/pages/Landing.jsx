import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            scelerisque est sed eros porttitor, id facilisis felis auctor. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec in sodales
            risus, at accumsan sapien. Vivamus viverra, metus sed scelerisque
            dapibus, lectus dolor finibus erat, vitae iaculis sem neque ac
            turpis. Nulla facilisi. In a iaculis est. In auctor placerat est id
            convallis. Pellentesque maximus, neque ac tincidunt ultricies, mi
            neque mattis elit, a lacinia enim nibh non tellus. Aenean in tempor
            dui, in tincidunt diam. Sed viverra eleifend leo, eu tincidunt ante
            ultrices sit amet. In at tortor placerat, vestibulum nisl id, tempus
            nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam elit ligula, mollis id magna
            rhoncus, rutrum aliquam ante. Morbi sed massa bibendum, malesuada
            lacus eget, eleifend arcu. Nulla facilisi.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login /Demo user
          </Link>
        </div>
        <img src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
