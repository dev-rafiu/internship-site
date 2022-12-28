import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { title, company } = item;
  const initial = company[0];

  return (
    <article className="internship">
      <div className="about">
        <div className="logo">{initial}</div>
        <div>
          <h4 className="internship-title">{title}</h4>
          <h5 className="name-of-company">{company}</h5>
        </div>
      </div>

      <Link to={`/internship/${item.id}`} className="details-link">
        Details
      </Link>
    </article>
  );
}

export default Card;
