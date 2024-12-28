import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useState } from "react";
const ThemeToggle = (isDarkThemeEnabled) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill onClick={toggleDarkTheme} className="toggle-icon" />
      ) : (
        <BsFillMoonFill onClick={toggleDarkTheme} className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
