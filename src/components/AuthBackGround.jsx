import "../styles/styles.css";

export default function AuthBackground({
  className="",
  style={},
  children,
  ...props
}) {
  return (
    <>
      <div
        className={`authentication-background ${className}`}
        {...props}
        style={{ ...style }}
      >
        {children}
      </div>
    </>
  );
}
