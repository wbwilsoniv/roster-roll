import React from "react";

const Player = ({ id, firstname, team }) => (
  <div className="playerDiv">
    <div className="player" key={id}>
      <p>ID: {id}</p>
      <p>NAME: {firstname}</p>
      <p>TEAM: {team}</p>
    </div>
  </div>
);

export default Player;
