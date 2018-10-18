import React from "react";

const Player = ({ id, name, team }) => (
  <div className="playerDiv">
    <div className="player" key={id}>
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
      <p>TEAM: {team}</p>
    </div>
  </div>
);

export default Player;
