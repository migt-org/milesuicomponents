import { Completed, InProgress, NotStarted } from "./AssignmentStatus";

export function AssignmentSubject({ subject}) {
  return (
    <>
      <h3 className="assignment-subject">{subject}</h3>
    </>
  );
}

export function AssignmentTitle({ title }) {
  return (
    <>
      <p className="assignment-title">Assignment: {title}</p>
    </>
  );
}

export function AssignmentDueDate({ dueDate }) {
  return (
    <>
      <p className="assignment-due-date">Due date: {dueDate}</p>
    </>
  );
}

export function AssignmentCard({
  className,
  subject,
  title,
  status,
  dueDate,
  onClick,
}) {
  return (
    <>
      <div
        className={`${className} ${
          status === "completed"
            ? "assignment-card-completed"
            : status === "in progress"
            ? "assignment-card-in-progress"
            : "assignment-card-not-started"
        }`}
        onClick={onClick}
      >
        <div className="assignment-card-heading">
          <AssignmentSubject subject={subject} />
          {""}
          {status === "completed" ? (
            <Completed />
          ) : status === "in progress" ? (
            <InProgress />
          ) : (
            <NotStarted />
          )}
        </div>
        <div className="assignment-card-body">
          <AssignmentTitle title={title} />
          <AssignmentDueDate dueDate={dueDate} />
        </div>
      </div>
    </>
  );
}
