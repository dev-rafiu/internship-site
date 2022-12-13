import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { title, company } = item;
  const initial = company[0];

  return (
    <article className="internship mb-4 px-3 py-4 d-flex flex-column justify-content-between gap-3">
      <div className="about d-flex align-items-center gap-3">
        <div className="logo-container">{initial}</div>
        <div className="info">
          <h3 className="title py-1">{title}</h3>
          <h4 className="company text-capitalize">{company}</h4>
        </div>
      </div>

      <Link to={`/internship/${item.id}`} className="details-link">
        Details
      </Link>
    </article>
  );
}

export default Card;
