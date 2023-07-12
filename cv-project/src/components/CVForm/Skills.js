import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Tasks from "../Utilities/Tasks";
import Button from "../Utilities/Button";
// import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: "",
      skills: [],
      isEditing: false,
      isSkillAdded: false,
    };
  }

  handleAddSkill = () => {
    this.setState({
      isEditing: true,
      isSkillAdded: true,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { skills, skill } = this.state;

    if (skill.trim() !== "") {
      this.setState({
        skills: skills.concat(skill),
        skill: "",
        isEditing: false,
      });
    }
  };

  handleInputChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  render() {
    const { skills, skill, isEditing, isSkillAdded } = this.state;
    return (
      <div>
        <h2>Skills</h2>
        {!isSkillAdded ? (
          <Button text="+ Add Skill" onClick={this.handleAddSkill} />
        ) : isEditing ? (
          <div id="skillInputs" className="inputValues">
            <Tasks skills={skills} />
            <form
              onSubmit={this.handleSubmit}
              id="skillsEdit"
              className="editForm"
              action=""
              method="GET"
            >
              <InputField
                label=""
                id="skills"
                type="text"
                value={skill}
                onChange={this.handleInputChange}
                placeholder=""
              />
              <div className="submitButton">
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        ) : (
          <div onClick={this.handleEditClick}>
            {skills.length > 0 && <Tasks skills={skills} />}
            <Button text="+ Add Skill" onClick={this.handleAddSkill} />
          </div>
        )}
      </div>
    );
  }
}

export default Skills;
