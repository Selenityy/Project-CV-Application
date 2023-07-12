import React, { Component } from "react";

class InputField extends Component {
  render() {
    const { value, label, id, type, placeholder, onChange } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputField;
