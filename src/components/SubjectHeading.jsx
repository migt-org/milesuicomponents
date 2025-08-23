import "../styles/styles.css";
export default function SubjectHeading({ className, children, ...props }) {
  return (
    <>
      <h3 className={`assignment-subject ${className}`}>{children}</h3>
    </>
  );
}
