import "../styles/styles.css";

export default function Loader({ className = "", style = {}, ...props }) {
  return (
    <>
      <span
        className={`loader ${className}`}
        style={{ ...style }}
        {...props}
      ></span>
    </>
  );
}
