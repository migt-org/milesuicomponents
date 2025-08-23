import "../styles/styles.css";
export default function SubjectTitle({ clasdsName, children, ...props }) {
  return (
    <>
      <p className={`assignment-title ${clasdsName}`}>{children}</p>
    </>
  );
}
