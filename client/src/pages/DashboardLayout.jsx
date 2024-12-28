import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);

  const DashboardCtx = createContext();

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  const logOutUser = () => {
    console.log("log out user");
  };

  return (
    <DashboardCtx.Provider value={{ toggleSideBar }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar
            showSideBar={showSidebar}
            toggleSideBar={toggleSideBar}
          />
          <BigSidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
          <div>
            <Navbar
              toggleSideBar={toggleSideBar}
              user={user}
              logOutUser={logOutUser}
              isDarkThemeEnabled={isDarkThemeEnabled}
            />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardCtx.Provider>
  );
};

export default DashboardLayout;
