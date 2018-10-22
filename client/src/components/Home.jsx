import React from "react";

function Home(props) {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <div>
            <img
              src="https://user-images.githubusercontent.com/38361826/47182157-c2fbca80-d2f2-11e8-96c1-de28bb813170.png"
              alt="logo"
              style={{ maxWidth: `500px` }}
            />
          </div>
          <h1 className="title">Roster-Roll</h1>
          <p className="subtitle">2.0</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
