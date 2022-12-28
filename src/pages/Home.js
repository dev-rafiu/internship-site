import React, { useState, useEffect } from "react";
import { data } from "../data";

import Internship from "../components/Internship";

function Home() {
  const [internshipsList, setTnternshipsList] = useState([]);

  useEffect(() => {
    setTnternshipsList(data);
  }, []);

  return (
    <main>
      {/* <div className="container"> */}
      <h2>Available Internships</h2>
      <section className="section-center">
        {internshipsList.map((item) => (
          <Internship key={item.id} item={item} />
        ))}
      </section>
      {/* </div> */}
    </main>
  );
}

export default Home;
