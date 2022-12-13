import React from "react";
function Requirements({ requirements }) {
  return (
    <div className="description mb-3 details">
      <h3 className="mb-2">Requirements</h3>
      <ul>
        {requirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Requirements;
