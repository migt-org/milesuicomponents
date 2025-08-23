import "../styles/styles.css";
export default function SubjectTitle({
  style = {},
  clasdsName,
  children,
  ...props
}) {
  return (
    <>
      <p
        style={{ ...style }}
        {...props}
        className={`assignment-title ${clasdsName}`}
      >
        {children}
      </p>
    </>
  );
}
