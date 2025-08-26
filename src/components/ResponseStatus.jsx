export default function ResponseStatus({
  className = "",
  style = {},
  children,
  ...props
}) {
  return (
    <div
      className={`${className} response-status`}
      {...props}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
