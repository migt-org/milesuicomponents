import { useTheme } from "./ThemeContext";

export default function IconsWithText({
  className,
  icon,
  text,
  onClick,
  style,
}) {
  const { theme } = useTheme();
  return (
    <>
      <li
        onClick={onClick}
        className={`${className} ${
          theme === "light" ? "light-inconswithtext" : "dark-inconswithtext"
        }`}
        style={style}
      >
        <i className={icon} style={{ fontSize: "16px" }}></i>
        <span style={{ fontSize: "16px" }}>{text}</span>
      </li>
    </>
  );
}
