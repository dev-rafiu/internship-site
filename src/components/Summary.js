import React from "react";
function Summary({ summary }) {
  return (
    <div className="summary">
      <h3>Job Summary</h3>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;
