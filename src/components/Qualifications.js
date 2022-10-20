import React from "react";
function Qualifications({ qualifications }) {
  return (
    <div className="qualifications">
      <h3>Qualifications</h3>

      <ul>
        {qualifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Qualifications;
