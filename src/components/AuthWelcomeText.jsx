import "../styles/styles.css";
export default function AuthWelcomeText({
  style={},
  className="",
  children,
  ...props
}) {
  return (
    <>
      <p
        style={{ ...style }}
        {...props}
        className={`authentication-background-welcome-text ${className}`}
      >
        {children}
      </p>
    </>
  );
}
