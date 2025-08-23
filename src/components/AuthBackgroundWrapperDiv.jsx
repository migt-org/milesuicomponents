import "../styles/styles.css";

export default function AuthBackgroundWrapperDiv({
  className="",
  children,
  style={},
  ...props
}) {
  return (
    <div
      style={{ ...style }}
      {...props}
      className={`authentication-background-wrapper-div ${className}`}
    >
      {children}
    </div>
  );
}
