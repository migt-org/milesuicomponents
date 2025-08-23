import "../styles/styles.css";
export default function AssignmentStatus({
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
        className={`assignment-status ${className}`}
      >
        {children}
      </p>
    </>
  );
}
