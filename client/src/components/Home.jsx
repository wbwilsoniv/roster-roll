import React from "react";

function Home(props) {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <div>
            <img
              src="https://user-images.githubusercontent.com/38361826/47166650-aba8e700-d2ca-11e8-8620-832918079818.png"
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
