import "../styles/styles.css";

export default function CourseTitle({
  style = {},
  children="",
  className,
  ...props
}) {
  return (
    <>
      <h3
        style={{ ...style }}
        {...props}
        className={`course-card-title ${className}`}
      >
        {children}
      </h3>
    </>
  );
}
