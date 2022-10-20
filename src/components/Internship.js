import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { title, company, onsiteOrRemote } = item;

  return (
    <article className="internship mb-4 px-3 py-4 d-flex flex-column justify-content-between gap-3">
      <div className="about d-flex align-items-center gap-3">
        <div className="logo-container">{company[0]}</div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <h4 className="company text-capitalize my-1">{company}</h4>
          <h5 className="text-capitalize">{onsiteOrRemote}</h5>
        </div>
      </div>

      <Link to={`/internship/${item.id}`} className="more">
        Details
      </Link>
    </article>
  );
}

export default Card;