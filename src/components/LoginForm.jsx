import "../styles/styles.css";

export default function LoginForm({ className, children, ...props }) {
  return (
    <>
      <form className={`log-in-form ${className}`}>{children}</form>
    </>
  );
}
