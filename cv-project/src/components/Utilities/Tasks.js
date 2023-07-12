import React from "react";

const Tasks = (props) => {
  const { skills, onEditClick } = props;

  return (
    <ul>
      {skills.map((skill, index) => {
        return <li key={index} onClick={() => onEditClick(index)}>{skill}</li>;
      })}
    </ul>
  );
};

export default Tasks;
