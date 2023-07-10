import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";

class Personal extends Component {
  render() {
    return (
      <>
        <h2>Personal Information</h2>
        <div className="inputValues">
          <InputField label="Name" type="text" />
          <InputField label="Address" type="text" />
          <InputField label="Phone" type="tel" />
          <InputField label="Email" type="email" />
        </div>
        <div className="submitButton">
          <Button text="Submit" />
        </div>
      </>
    );
  }
}

export default Personal;
