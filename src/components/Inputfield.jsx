import { useState } from "react";

export function InputField({
  icon,
  id,
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  required,
  children,
  styleWrapper,
  style,
}) {
  return (
    <>
      <div className="input-field-wrapper" style={styleWrapper}>
        <i className={`icon ${icon}`} />
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          className={className}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          style={style}
        />
        {children}
      </div>
    </>
  );
}

export function PasswordInputField({
  icon,
  id,
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  required,
  styleWrapper,
  style,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [changeType, setChangeType] = useState("password");

  const handleTypeChange = () => {
    setShowPassword((prev) => !prev);
    setChangeType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="input-field-wrapper" style={styleWrapper}>
        <i className={`icon ${icon}`} />
        <input
          type={changeType}
          name={name}
          id={id}
          value={value}
          className={className}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          style={style}
        />
        {type === "password" ? (
          <i
            className={`show fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={handleTypeChange}
            style={{ cursor: "pointer" }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
