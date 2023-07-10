import "./styles/App.css";
import React, { Component } from "react";
import Personal from "./components/CVForm/Personal";
import Summary from "./components/CVForm/Summary";
import Education from "./components/CVForm/Education";
import Experience from "./components/CVForm/Experience";
import Skills from "./components/CVForm/Skills";

class App extends Component {
  render() {
    return (
      <>
        <div id="personalInfo">
          <Personal />
        </div>
        <div id="summaryInfo">
          <Summary />
        </div>
        <div id="educationInfo">
          <Education />
        </div>
        <div id="experienceInfo">
          <Experience />
        </div>
        <div id="skillsInfo">
          <Skills />
        </div>
      </>
    );
  }
}

export default App;
