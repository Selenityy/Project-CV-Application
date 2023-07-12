import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        nameText: "",
        nameLabel: "Name:",
      },
      address: {
        addressText: "",
        addressLabel: "Address:",
      },
      phone: {
        phoneText: "",
        phoneLabel: "Phone:",
      },
      email: {
        emailText: "",
        emailLabel: "Email:",
      },
      isEditing: false,
      isPersonalInfoAdded: false,
    };
  }

  handleAddName = () => {
    this.setState({
      isEditing: true,
      isPersonalInfoAdded: true,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameText } = this.state.name;
    const { emailText } = this.state.email;
    const { phoneText } = this.state.phone;
    const { addressText } = this.state.address;

    this.setState({
      name: {
        ...this.state.name,
        nameText: nameText,
      },
      email: {
        ...this.state.email,
        emailText: emailText,
      },
      phone: {
        ...this.state.phone,
        phoneText: phoneText,
      },
      address: {
        ...this.state.address,
        addressText: addressText,
      },
      isEditing: false,
    });
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      this.setState((prevState) => ({
        name: {
          ...prevState.name,
          nameText: value,
        },
      }));
    } else if (id === "email") {
      this.setState((prevState) => ({
        email: {
          ...prevState.email,
          emailText: value,
        },
      }));
    } else if (id === "phone") {
      this.setState((prevState) => ({
        phone: {
          ...prevState.phone,
          phoneText: value,
        },
      }));
    } else if (id === "address") {
      this.setState((prevState) => ({
        address: {
          ...prevState.address,
          addressText: value,
        },
      }));
    }
  };

  render() {
    const { isEditing, isPersonalInfoAdded } = this.state;
    const nameLabel = this.state.name.nameLabel;
    const nameText = this.state.name.nameText;
    const emailLabel = this.state.email.emailLabel;
    const emailText = this.state.email.emailText;
    const phoneLabel = this.state.phone.phoneLabel;
    const phoneText = this.state.phone.phoneText;
    const addressLabel = this.state.address.addressLabel;
    const addressText = this.state.address.addressText;

    return (
      <div>
        {!isPersonalInfoAdded ? (
          <Button
            text="+ Add Personal Information"
            onClick={this.handleAddName}
          />
        ) : isEditing ? (
          <div id="personalInputs" className="inputValues">
            <form
              onSubmit={this.handleSubmit}
              id="personalEdit"
              className="editForm"
              action=""
              method="GET"
            >
              <InputField
                label={nameLabel}
                id="name"
                type="text"
                value={nameText}
                onChange={this.handleInputChange}
              />
              <InputField
                label={emailLabel}
                id="email"
                type="text"
                value={emailText}
                onChange={this.handleInputChange}
              />
              <InputField
                label={phoneLabel}
                id="phone"
                type="text"
                value={phoneText}
                onChange={this.handleInputChange}
              />
              <InputField
                label={addressLabel}
                id="address"
                type="text"
                value={addressText}
                onChange={this.handleInputChange}
              />
              <div className="submit Button">
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        ) : (
          <div onClick={this.handleEditClick}>
            {nameText ? nameText : ""} {emailText ? emailText : ""}
            {phoneText ? phoneText : ""} {addressText ? addressText : ""}
          </div>
        )}
      </div>
    );
  }
}

export default Personal;
