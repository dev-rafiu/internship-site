import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="mt-5 text-center">
        <h1>Page Not Found</h1>
        <Link to="/" className="back-link px-5 py-1 mt-2">
          Back
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
