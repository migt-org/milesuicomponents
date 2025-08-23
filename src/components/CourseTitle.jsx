import "../styles/styles.css";

export default function CourseTitle({ children, className, ...props }) {
  return (
    <>
      <h3 className={`course-card-title ${className}`}>{children}</h3>
    </>
  );
}
