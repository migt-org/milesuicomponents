import "../styles/styles.css";

export default function InputFieldIcon({ style = {}, className="", ...props }) {
  return <i style={{ ...style }} {...props} className={`icon ${className}`} />;
}
