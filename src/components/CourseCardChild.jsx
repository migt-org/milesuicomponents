import "../styles/styles.css";

export default function CourseCardChild({
  style = {},
  className="",
  children,
  ...props
}) {
  return (
    <>
      <div
        style={{ ...style }}
        {...props}
        className={`${className} course-card-child`}
      >
        {children}
      </div>
    </>
  );
}
