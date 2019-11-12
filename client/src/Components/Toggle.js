import React from "react";
import { DarkMode } from './DarkMode';

const ToggleBtn = () => {
  const [darkMode, setDarkMode] = DarkMode("key", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default ToggleBtn;
