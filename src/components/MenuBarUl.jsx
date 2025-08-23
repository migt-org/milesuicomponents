import "./styles.css";
import { useTheme } from "./ThemeContext";

export default function MenuBarUl({ children, className }) {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${className} ${
          theme === "light" ? "light-menu-bar-ul" : "dark-menu-bar-ul"
        }`}
      >
        {children}
      </div>
    </>
  );
}
