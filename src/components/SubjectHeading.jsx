import "../styles/styles.css";
export default function SubjectHeading({
  style = {},
  className="",
  children,
  ...props
}) {
  return (
    <>
      <h3
        {...props}
        style={{ ...style }}
        className={`assignment-subject ${className}`}
      >
        {children}
      </h3>
    </>
  );
}
