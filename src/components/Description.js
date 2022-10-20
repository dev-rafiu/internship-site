import React from "react";
function Requirements({ description }) {
  return (
    <div className="description">
      <h3>Responsibilities</h3>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Requirements;
