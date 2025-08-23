import "../styles/styles.css";

export default function InputFieldWrapper({
  style = {},
  className = "",
  children,
  ...props
}) {
  return (
    <>
      <div
        style={{ ...style }}
        {...props}
        className={`input-field-wrapper  ${className}`}
      >
        {children}
      </div>
    </>
  );
}
