import "../styles/styles.css";

export default function Button({ className, children, ...props }) {
  return (
    <>
      <button className={`${className} button-ui`}>{children}</button>
    </>
  );
}
