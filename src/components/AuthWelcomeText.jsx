import "../styles/styles.css";
export default function AuthWelcomeText({ style, children }) {
  return (
    <>
      <p className="authentication-background-welcome-text" style={style}>
        {children}
      </p>
    </>
  );
}
