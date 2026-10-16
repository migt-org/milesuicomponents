import "../styles/styles.css";

export default function MilesCard({
  className = "",
  style = {},
  children,
  ...props
}) {
  return (
    <>
      <div {...props} style={{ ...style }} className={`${className} milescard`}>
        {children}
      </div>
    </>
  );
}
