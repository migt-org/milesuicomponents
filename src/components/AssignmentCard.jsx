import "../styles/styles.css";
export default function AssignmentCard({ className, children, ...props }) {
  return (
    <>
      <div className={`${className} assignment-card`}>{children}</div>
    </>
  );
}
