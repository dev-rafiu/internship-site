import React from "react";
function Qualifications({ qualifications }) {
  return (
    <div className="qualifications mb-3 details">
      <h3 className="mb-2">Qualifications</h3>
      <ul>
        {qualifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Qualifications;
