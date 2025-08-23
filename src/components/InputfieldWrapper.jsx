import "../styles/styles.css";

export default function InputFieldWrapper({ className, children, ...props }) {
  return (
    <>
      <div className={`input-field-wrapper  ${className}`}>{children}</div>
    </>
  );
}
