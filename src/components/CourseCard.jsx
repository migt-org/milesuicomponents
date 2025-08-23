import "../styles/styles.css";
export default function CourseCard({
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
        className={`${className} course-card`}
      >
        {children}
      </div>
    </>
  );
}
