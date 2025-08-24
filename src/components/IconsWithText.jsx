import "../styles/styles.css";

export default function IconsWithText({ className="", children, ...props }) {
  return (
    <>
      <li className={`${className} li {...props}`}>{children}</li>
    </>
  );
}
