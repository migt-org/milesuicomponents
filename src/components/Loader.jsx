import "../styles/styles.css";

export default function Loader({ className = "", style = {}, ...props }) {
  return (
    <div className="loader-wrapper">
      <span
        className={`loader ${className}`}
        style={{ ...style }}
        {...props}
      ></span>
    </div>
  );
}
