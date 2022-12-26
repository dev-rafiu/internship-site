import React from "react";
function Description({ description }) {
  return (
    <div className="description mb-3 details">
      <h3 className="mb-2">Description</h3>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
