import "../styles/styles.css";

export default function IconsWithText({ className, children, ...props }) {
  return (
    <>
      <li className={`${className} icons-with-text ${theme}`}>{children}</li>
    </>
  );
}
