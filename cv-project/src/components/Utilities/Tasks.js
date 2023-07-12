import React from "react";

const Tasks = (props) => {
  const { skills } = props;

  return (
    <ul>
      {skills.map((skill, index) => {
        return <li key={index}>{skill}</li>;
      })}
    </ul>
  );
};

export default Tasks;
