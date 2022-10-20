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
            <h2 className="title">{title}</h2>

            <div className="about d-flex gap-2">
              <div className="logo-container">{company[0]}</div>
              <div className="info">
                <h4 className="company">{company}</h4>
                <h5 className="location">{location}</h5>
                <p>{onsiteOrRemote}</p>
              </div>
            </div>

            <Summary summary={summary} />

            {description && <Description description={description} />}

            {qualifications && (
              <Qualifications qualifications={qualifications} />
            )}

            <Link className="apply-link">Apply</Link>
          </article>

          <Link to="/internships" className="back-link py-1 px-3 mt-2">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default Details;
