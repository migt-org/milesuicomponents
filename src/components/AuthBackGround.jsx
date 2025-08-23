import "./styles.css";

export function AuthBackground({ children }) {
  return (
    <>
      <div className="authentication-background">
        <div className="authentication-background-wrapper">
          <div className="authentication-background-wrapper-div">
            {children}
          </div>
        </div>
        <div className="attribution">
          <p>
            Powered by <a href="https://x.com/f_nanakwao">miles</a>
          </p>
        </div>
      </div>
    </>
  );
}
