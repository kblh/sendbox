import React from 'react';

const Input = props => {
  return (
    <div className="form-group">
      <label>{props.label} {props.required ? <span className="c-error">*</span> : null}</label>
      <input 
        type={props.type ? props.type : "text"}
        name={props.name}
        value={props.value}
        required={props.required}
        onClick={props.onClick} 
        onChange={props.onChange} 
        className={props.error ? "input-error" : null}
      />
      {props.error ? <div className="validation-message">{props.error}</div> : null}
    </div>
  )
};

export default Input;
