import "./styles.css";
import { useTheme } from "./ThemeContext";

export default function Button({ className, children, onClick, style, type }) {
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={onClick}
        className={`${className} ${
          theme === "light" ? "light-button" : "dark-button"
        }`}
        style={style}
        type={type}
      >
        {children}
      </button>
    </>
  );
}
