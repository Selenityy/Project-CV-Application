import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";
import Jobs from "../Utilities/Jobs";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        address: "",
        description: "",
      },
      jobs: [],
      isEditing: false,
      isJobAdded: false,
      editingIndex: null,
    };
  }

  handleAddJob = () => {
    this.setState({
      isEditing: true,
      isJobAdded: true,
      editingIndex: null,
      job: {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        address: "",
        description: "",
      },
    });
  };

  handleEditClick = (index) => {
    this.setState({
      isEditing: true,
      editingIndex: index,
      job: this.state.jobs[index],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { jobs, job, editingIndex } = this.state;

    if (editingIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs[editingIndex] = job;

      this.setState({
        jobs: updatedJobs,
        job: {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          address: "",
          description: "",
        },
        isEditing: false,
        editingIndex: null,
      });
    } else {
      this.setState({
        jobs: [...jobs, job],
        job: {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          address: "",
          description: "",
        },
        isEditing: false,
      });
    }
  };

  handleInputChange = (e) => {
    const { jobs, editingIndex } = this.state;
    const { name, value } = e.target;

    if (editingIndex !== null && value === "") {
      const updatedJobs = jobs.filter((_, index) => index !== editingIndex);
      this.setState({
        jobs: updatedJobs,
        job: {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          address: "",
          description: "",
        },
        isEditing: false,
        editingIndex: null,
      });
    } else {
      this.setState((prevState) => ({
        job: {
          ...prevState.job,
          [name]: value,
        },
      }));
    }
  };

  render() {
    const { jobs, job, isEditing, isJobAdded } = this.state;
    return (
      <div>
        <h2>Experience</h2>
        {!isJobAdded ? (
          <Button text="+ Add Experience" onClick={this.handleAddJob} />
        ) : isEditing ? (
          <div id="jobInputs" className="inputValues">
            <Jobs jobs={jobs} onEditClick={this.handleEditClick} />
            <form
              onSubmit={this.handleSubmit}
              id="jobsEdit"
              className="editForm"
              action=""
              method="GET"
            >
              <InputField
                label="Job Title:"
                id="jobTitle"
                type="text"
                name="title"
                value={job.title || ""}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Company:"
                id="company"
                type="text"
                name="company"
                value={job.company || ""}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Start Date:"
                id="startDate"
                type="text"
                name="startDate"
                value={job.startDate || ""}
                onChange={this.handleInputChange}
              />
              <InputField
                label="End Date:"
                id="endDate"
                type="text"
                name="endDate"
                value={job.endDate || ""}
                onChange={this.handleInputChange}
              />
              <InputField
                label="Address:"
                id="address"
                type="text"
                name="address"
                value={job.address || ""}
                onChange={this.handleInputChange}
              />
              <div className="submitButton">
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        ) : (
          <div>
            {jobs.length > 0 && (
              <Jobs jobs={jobs} onEditClick={this.handleEditClick} />
            )}
            <Button text="+ Add Experience" onClick={this.handleAddJob} />
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
