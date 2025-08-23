import "../styles/styles.css";
export default function AssignmentCard({
  className="",
  style={},
  children,
  ...props
}) {
  return (
    <>
      <div
        {...props}
        style={{ ...style }}
        className={`${className} assignment-card`}
      >
        {children}
      </div>
    </>
  );
}
