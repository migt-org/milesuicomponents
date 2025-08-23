
export function AssignmentTitle({ clasdsName, children, ...props }) {
  return (
    <>
      <p className={`assignment-title ${clasdsName}`}>{children}</p>
    </>
  );
}

export function AssignmentCard({ className, children, ...props }) {
  return (
    <>
      <div className={`${className}`}>
        <div className="assignment-card-heading"></div>
        <div className="assignment-card-body"></div>
      </div>
    </>
  );
}
