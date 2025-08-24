import "../styles/styles.css";

export default function MenuBarUl({
  style = {},
  children,
  className="",
  ...props
}) {
  return (
    <>
      <div
        style={{ ...style }}
        {...props}
        className={`${className} sidebar`}
      >
        {children}
      </div>
    </>
  );
}
