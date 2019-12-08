import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.scss";

export default props => {
  const { autoComplete = "on", input, label, placeholder, meta, type = "text" } = props;
  const hasError = meta.touched && meta.error;
  return (
    <div className="mb-3">
      <label className="label">{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        className="login-input"
        type={type}
        autoComplete={autoComplete}
        required
      />
      <div className="danger error loginError">{hasError}</div>
    </div>
  );
};
