import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";
const Navbar = ({ toggleSideBar, user, logOutUser, isDarkThemeEnabled }) => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <ThemeToggle isDarkThemeEnabled={isDarkThemeEnabled} />

          <LogoutContainer user={user} logOutUser={logOutUser} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
