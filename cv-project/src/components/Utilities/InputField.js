import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    const { label, type } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type={type} value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default InputField;
