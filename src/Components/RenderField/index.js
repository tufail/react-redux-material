import React from 'react';
import "./RenderField.css"
const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div className = "inputWrapper">
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className = "errorMessage">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  export default RenderField;
