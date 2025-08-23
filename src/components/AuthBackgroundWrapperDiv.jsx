import "../styles/styles.css"

export default function AuthBackgroundWrapperDiv({
  className,
  children,
  ...props
}) {
  return (
    <div className={`authentication-background-wrapper-div ${className}`}>
      {children}
    </div>
  );
}
