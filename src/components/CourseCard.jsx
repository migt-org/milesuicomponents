import "../styles/styles.css";
export default function CourseCard({ className, children, ...props }) {
  return (
    <>
      <div className={`${className} course-card`}>{children}</div>
    </>
  );
}
