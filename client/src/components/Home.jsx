import React from "react";

function Home(props) {
  return (
    <section className="hero is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div>
            <img
              src="https://user-images.githubusercontent.com/38361826/47593746-82313080-d946-11e8-868d-8fef1bd919b9.png"
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
