import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: "",
        isEditing: true,
        label: "Name:",
      },
      country: {
        text: "",
        isEditing: true,
        label: "Country:",
      },
      address: {
        text: "",
        isEditing: true,
        label: "Address:",
      },
      cityState: {
        text: "",
        isEditing: true,
        label: "City/State:",
      },
      zipCode: {
        text: "",
        isEditing: true,
        label: "ZipCode:",
      },
      phone: {
        text: "",
        isEditing: true,
        label: "Phone Number:",
      },
      email: {
        text: "",
        isEditing: true,
        label: "Email:",
      },
      isInfoAdded: false,
    };
  }

  handleAddMode = () => {
    this.setState({
      isInfoAdded: true,
    });
  };

  handleFieldClick = (field) => {
    this.setState((prevState) => ({
      [field]: {
        ...prevState[field],
        isEditing: true,
      },
    }));
  };

  handleInputChange = (e, field) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      [field]: {
        ...prevState[field],
        text: value,
      },
    }));
  };

  handleSaveFields = () => {
    this.setState((prevState) => {
      const updatedFields = {};

      Object.keys(prevState).forEach((field) => {
        if (field !== "isInfoAdded") {
          updatedFields[field] = {
            ...prevState[field],
            // text: prevState[field].text,
            isEditing: false,
            // label: prevState[field].label,
          };
        }
      });
      return {
        ...updatedFields,
      };
    });
  };

  render() {
    const { isInfoAdded, ...fields } = this.state;
    if (isInfoAdded) {
      return (
        <>
          <div id="personalInputs" className="inputValues">
            {Object.entries(fields).map(
              ([field, { text, isEditing, label }]) => (
                <div
                  key={field}
                  onClick={() => this.handleFieldClick(field)}
                  style={{ cursor: "pointer" }}
                >
                  {isEditing ? (
                    <InputField
                      label={label}
                      id={field}
                      type="text"
                      value={text}
                      onChange={(e) => this.handleInputChange(e, field)}
                    />
                  ) : (
                    <div>{text}</div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="submitButton">
            <Button text="Save" onClick={this.handleSaveFields} />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="addButton">
          <Button text="+ Add Personal Info" onClick={this.handleAddMode} />
        </div>
      </>
    );
  }
}

export default Personal;
