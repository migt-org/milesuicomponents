import "./styles.css";

export function CourseCard({ className, onClick, style, children }) {
  return (
    <>
      <div className={`${className} course-card`} onClick={onClick}>
        <div className="course-card-child" style={style}>
          {children}
        </div>
      </div>
    </>
  );
}
