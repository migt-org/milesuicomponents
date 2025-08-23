import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const mediaQueryTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQueryTheme.matches ? "dark" : "light");

    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQueryTheme.addEventListener("change", handleThemeChange);

    return () => {
      mediaQueryTheme.removeEventListener("change", handleThemeChange);
    };
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
