import React from "react";
function Summary({ summary }) {
  return (
    <div className="summary mb-3 details">
      <h3 className="mb-2">Summary</h3>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;
