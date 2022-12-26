import React from "react";
import { Link, useParams } from "react-router-dom";
import Summary from "../components/Summary";
import Description from "../components/Description";
import Qualifications from "../components/Qualifications";
import Benefits from "../components/Benefits";
import { data } from "../data";

function Details() {
  const { id } = useParams();
  let currentData = data.find((item) => item.id === parseInt(id));
  const {
    title,
    company,
    location,
    summary,
    description,
    qualifications,
    onsiteOrRemote,
    benefits,
    url,
  } = currentData;

  return (
    <>
      <section className="details-section">
        <div className="section-center">
          <article className="details">
            <h2 className="title mb-3">{title}</h2>
            <div className="about d-flex gap-3 mb-3">
              <div className="logo-container">{company[0]}</div>
              <div className="info">
                <h3 className="company text-capitalize m-0">{company}</h3>
                <h4 className="location">
                  {location} <span>({onsiteOrRemote})</span>
                </h4>
              </div>
            </div>
            <Summary summary={summary} />
            {description && <Description description={description} />}
            {qualifications && (
              <Qualifications qualifications={qualifications} />
            )}
            {benefits && <Benefits benefits={benefits} />}
            <Link to="/internships" className="back-link py-1 px-3 mt-3">
              Back To Home
            </Link>
            <a
              href={url && url}
              className="apply-link py-1 px-3 mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Details;
