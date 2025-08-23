import "../styles/styles.css";

export default function AuthBackGroundWrapper({
  className,
  children,
  ...props
}) {
  return (
    <div className={`authentication-background-wrapper ${className}`}>
      {children}
    </div>
  );
}
