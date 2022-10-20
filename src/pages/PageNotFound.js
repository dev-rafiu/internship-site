import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="mt-5 text-center">
        <h1>Page Not Found</h1>
        <Link to="/" className="back-link px-5 py-1 mt-2">
          Back To Home
        </Link>
      </section>
    </>
  );
}

export default PageNotFound;
