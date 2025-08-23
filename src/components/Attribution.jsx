import "../styles/styles.css";

export default function Attribution({ className, children, ...props }) {
  return <div className={`attribution`` ${className}`}>{children}</div>;
}
