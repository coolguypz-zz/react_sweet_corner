import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../form/form.scss";

export default props => {
  const { autoComplete = "on", input, placeholder, id, meta, type = "text" } = props;
  const hasError = meta.touched && meta.error;
  return (
    <div className="mb-3">
      <input
        {...input}
        placeholder={placeholder}
        id={id}
        className="input-field"
        type={type}
        autoComplete={autoComplete}
        required
      />
      <div className="danger error ">{hasError}</div>
    </div>
  );
};
