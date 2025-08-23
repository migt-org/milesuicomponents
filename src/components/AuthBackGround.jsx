import "../styles/styles.css";

export default function AuthBackground({ className, children, ...props }) {
  return (
    <>
      <div className={`authentication-background ${className}`}>{children}</div>
    </>
  );
}
