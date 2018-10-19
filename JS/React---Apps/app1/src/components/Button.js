import React from 'react';

const Button = props => {
  return (
    <div className="form-group">
      <button className="btn btn-primary" disabled={props.disabled} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  )
};

export default Button;
