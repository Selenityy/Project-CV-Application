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
      editingIndex: null,
    };
  }

  handleAddSkill = () => {
    this.setState({
      isEditing: true,
      isSkillAdded: true,
      editingIndex: null,
      skill: "",
    });
  };

  handleEditClick = (index) => {
    this.setState({
      isEditing: true,
      editingIndex: index,
      skill: this.state.skills[index],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { skills, skill, editingIndex } = this.state;

    if (skill.trim() !== "") {
      if (editingIndex !== null) {
        const updatedSkills = [...skills];
        updatedSkills[editingIndex] = skill;

        this.setState({
          skills: updatedSkills,
          skill: "",
          isEditing: false,
          editingIndex: null,
        });
      } else {
        this.setState({
          skills: [...skills, skill],
          skill: "",
          isEditing: false,
        });
      }
    }
  };

  handleInputChange = (e) => {
    const { skills, editingIndex } = this.state;
    const skill = e.target.value;

    if (editingIndex !== null && skill === "") {
      const updatedSkills = skills.filter((_, index) => index !== editingIndex);
      this.setState({
        skills: updatedSkills,
        skill: "",
        isEditing: false,
        editingIndex: null,
      });
    } else {
      this.setState({
        skill,
      });
    }
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
            <Tasks skills={skills} onEditClick={this.handleEditClick} />
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
          <div>
            {skills.length > 0 && (
              <Tasks skills={skills} onEditClick={this.handleEditClick} />
            )}
            <Button text="+ Add Skill" onClick={this.handleAddSkill} />
          </div>
        )}
      </div>
    );
  }
}

export default Skills;
