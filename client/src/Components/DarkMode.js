import useLocalStorage from "./LocalStorage";
import { useEffect } from "react";

export const DarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage(initialValue, false);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};


