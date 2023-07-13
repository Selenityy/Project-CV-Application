import React, { Component } from "react";

class MultipleInputs extends Component {
  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { onChange } = this.props;

    onChange(name, value);
  };

  render() {
    const { value, label, id, type, placeholder, name } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default MultipleInputs;
