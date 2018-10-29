import React from "react";

const Player = ({ id, firstname, team }) => (
  <span className="playerRow" key={id}>
    <th>{id}</th>
    <td> {firstname}</td>
    <td>{team}</td>
  </span>
);

export default Player;
