import React from "react";
function Benefits({ benefits }) {
  return (
    <div className="benefits details">
      <h3 className="mb-2">What you will learn</h3>
      <ul>
        {benefits.map((item, index) => (
          <li key={index} className="p-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Benefits;
