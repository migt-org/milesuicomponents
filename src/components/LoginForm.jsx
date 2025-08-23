export function LoginForm({ onSubmit, children }) {
  return (
    <>
      <form onSubmit={onSubmit} className="log-in-form">
        {children}
      </form>
    </>
  );
}
