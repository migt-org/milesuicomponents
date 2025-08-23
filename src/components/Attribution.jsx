import "../styles/styles.css";

export default function Attribution({
  style = {},
  className = "",
  children,
  ...props
}) {
  return (
    <div style={{ ...style }} {...props} className={`attri ${className}`}>
      {children}
    </div>
  );
}
