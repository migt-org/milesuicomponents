import "../styles/styles.css";

export default function Button({ style={}, className="", children, ...props }) {
  return (
    <>
      <button
        className={`${className} button-ui`}
        style={{ ...style }}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
