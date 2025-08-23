import "../styles/styles.css";
export default function AssignmentStatus({ className, children, ...props }) {
  return (
    <>
      <p className={`assignment-status ${className}`}>{children}</p>
    </>
  );
}
