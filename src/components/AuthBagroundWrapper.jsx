import "../styles/styles.css";

export default function AuthBackGroundWrapper({
  className="",
  children,
  style={},
  ...props
}) {
  return (
    <div
      style={{ ...style }}
      {...props}
      className={`authentication-background-wrapper ${className}`}
    >
      {children}
    </div>
  );
}
