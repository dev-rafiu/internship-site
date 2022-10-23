import React from "react";
import { Link, useParams } from "react-router-dom";
import Summary from "../components/Summary";
import Description from "../components/Description";
import Qualifications from "../components/Qualifications";
import { data } from "../data";

function Details() {
  const { id } = useParams();
  let currentUser = data.find((item) => item.id === parseInt(id));
  const {
    title,
    company,
    location,
    summary,
    description,
    qualifications,
    onsiteOrRemote,
  } = currentUser;

  return (
    <>
      <section className="details-section">
        <div className="section-center">
          <article className="detail">
            <h2 className="title mb-3">{title}</h2>

            <div className="about d-flex gap-3 mb-3">
              <div className="logo-container">{company[0]}</div>
              <div className="info">
                <h3 className="company text-capitalize m-0">{company}</h3>
                <h4 className="location">{location}</h4>
                <p className="p-0">{onsiteOrRemote}</p>
              </div>
            </div>

            <Summary summary={summary} />

            {description && <Description description={description} />}

            {qualifications && (
              <Qualifications qualifications={qualifications} />
            )}

            <Link className="apply-link">Apply</Link>
          </article>

          <div className="text-center">
            <Link to="/internships" className="back-link py-1 px-3 mt-3">
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
