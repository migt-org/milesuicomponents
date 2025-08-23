import "../styles/styles.css";

export default function CourseCardChild({ className, children, ...props }) {
  return (
    <>
      <div className={`${className} course-card-child`}>{children}</div>
    </>
  );
}
