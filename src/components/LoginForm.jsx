import "../styles/styles.css";

export default function LoginForm({
  style = {},
  className="",
  children,
  ...props
}) {
  return (
    <>
      <form
        {...props}
        style={{ ...style }}
        className={`log-in-form ${className}`}
      >
        {children}
      </form>
    </>
  );
}
