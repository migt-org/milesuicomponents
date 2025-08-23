import "../styles/styles.css";
export default function SubjectTitle({
  style = {},
  className = "",
  children,
  ...props
}) {
  return (
    <>
      <p
        style={{ ...style }}
        {...props}
        className={`assignment-title ${className}`}
      >
        {children}
      </p>
    </>
  );
}
