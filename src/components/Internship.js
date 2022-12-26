import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { title, company } = item;
  const initial = company[0];

  return (
    <article className="internship mb-4 px-3 pt-4 pb-3">
      <div className="about d-flex gap-3">
        <div className="logo-container">{initial}</div>
        <div className="info">
          <h4 className="title pb-1">{title}</h4>
          <h5 className="company text-capitalize">{company}</h5>
        </div>
      </div>

      <Link to={`/internship/${item.id}`} className="details-link mt-3 py-0">
        Details
      </Link>
    </article>
  );
}

export default Card;
