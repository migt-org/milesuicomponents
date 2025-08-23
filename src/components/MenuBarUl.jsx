import "../styles/styles.css";

export default function MenuBarUl({ children, className, ...props }) {
  return (
    <>
      <div className={`${className} menu-bar-ul`}>{children}</div>
    </>
  );
}
