import React, { useState, useEffect } from "react";
import { data } from "../data";
import Internship from "../components/Internship";

function Home() {
  const [appData, setAppData] = useState(data);

  return (
    <>
      <main className="internships-container">
        <div className="section-center my-5">
          {appData.map((item) => (
            <Internship key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
