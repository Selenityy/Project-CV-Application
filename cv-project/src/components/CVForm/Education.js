import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      schoolLocal: "",
      educationLvl: "",
      fieldOfStudy: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schools: [],
      isEditing: false,
      isSchoolAdded: false,
    };
  }

  handleAddSchool = () => {
    this.setState({
      isEditing: true,
      isSchoolAdded: true,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { schoolName } = this.state;
    const { schoolLocal } = this.state;
    const { educationLvl } = this.state;
    const { fieldOfStudy } = this.state;
    const { schoolStartDate } = this.state;
    const { schoolEndDate } = this.state;

    this.setState({
      schoolName: schoolName,
      schoolLocal: schoolLocal,
      educationLvl: educationLvl,
      fieldOfStudy: fieldOfStudy,
      schoolStartDate: schoolStartDate,
      schoolEndDate: schoolEndDate,
      isEditing: false,
    });
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "schoolName") {
      this.setState({
        schoolName: value,
      });
    } else if (id === "schoolLocal") {
      this.setState({
        schoolLocal: value,
      });
    } else if (id === "educationLvl") {
      this.setState({
        educationLvl: value,
      });
    } else if (id === "fieldOfStudy") {
      this.setState({
        fieldOfStudy: value,
      });
    } else if (id === "schoolStartDate") {
      this.setState({
        schoolStartDate: value,
      });
    } else if (id === "schoolEndDate") {
      this.setState({
        schoolEndDate: value,
      });
    }
  };

  render() {
    const {
      schoolName,
      schoolLocal,
      educationLvl,
      fieldOfStudy,
      schoolStartDate,
      schoolEndDate,
      isEditing,
      isSchoolAdded,
    } = this.state;
    return (
      <div>
        <h2>Education</h2>
        {!isSchoolAdded ? (
          <Button text="+ Add Education" onClick={this.handleAddSchool} />
        ) : isEditing ? (
          <div id="educationInputs" className="inputValues">
            <form
              onSubmit={this.handleSubmit}
              id="educationEdit"
              className="editForm"
              action=""
              method="GET"
            >
              <InputField
                label="School Name:"
                id="schoolName"
                type="text"
                value={schoolName}
                onChange={this.handleInputChange}
              />
              <InputField
                label="School Location:"
                id="schoolLocal"
                type="text"
                value={schoolLocal}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Level of Education:"
                id="educationLvl"
                type="text"
                value={educationLvl}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Field of Study:"
                id="fieldOfStudy"
                type="text"
                value={fieldOfStudy}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Start Date:"
                id="schoolStartDate"
                type="text"
                placeholder="Month & Year"
                value={schoolStartDate}
                onChange={this.handleInputChange}
              />
              <InputField
                label="End Date:"
                id="schoolEndDate"
                type="text"
                placeholder="Month & Year/ Present"
                value={schoolEndDate}
                onChange={this.handleInputChange}
              />
              <div className="submitButton">
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        ) : (
          <div onClick={this.handleEditClick}>
            {schoolName ? schoolName : ""}
            {schoolLocal ? schoolLocal : ""}
            {educationLvl ? educationLvl : ""}
            {fieldOfStudy ? fieldOfStudy : ""}
            {schoolStartDate ? schoolStartDate : ""}
            {schoolEndDate ? schoolEndDate : ""}
            <Button text="+ Add Education" onClick={this.handleAddSchool} />
          </div>
        )}
      </div>
    );
  }
}

export default Education;
