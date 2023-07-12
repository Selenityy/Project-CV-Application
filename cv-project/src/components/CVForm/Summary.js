import React, { Component } from "react";
import InputField from "../Utilities/InputField";
import Button from "../Utilities/Button";

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryText: "",
      isEditing: false,
      isSummaryAdded: false,
    };
  }

  handleAddSummary = () => {
    this.setState({
      isEditing: true,
      isSummaryAdded: true,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { summaryText } = this.state;
    this.setState({
      summaryText: summaryText,
      isEditing: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      summaryText: e.target.value,
    });
  };

  render() {
    const { summaryText, isEditing, isSummaryAdded } = this.state;
    return (
      <div>
        <h2>Summary</h2>
        {!isSummaryAdded ? (
          <Button text="+ Add Summary" onClick={this.handleAddSummary} />
        ) : isEditing ? (
          <div id="summaryInputs" className="inputValues">
            <form
              onSubmit={this.handleSubmit}
              id="summaryEdit"
              className="editForm"
              action=""
              method="GET"
            >
              <InputField
                label=""
                id="summary"
                type="text"
                value={summaryText}
                onChange={this.handleInputChange}
                placeholder="e.g. Dedicated [Project Manager] with [3] years experience..."
              />
              <div className="submitButton">
                <Button text="Save" type="submit" />
              </div>
            </form>
          </div>
        ) : (
          <div onClick={this.handleEditClick}>
            {summaryText
              ? summaryText
              : "e.g. Dedicated [Project Manager] with [3] years experience..."}
          </div>
        )}
      </div>
    );
  }
}

export default Summary;
