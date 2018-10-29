import React from "react";

const Game = ({ id, gdate, gtime, home, team }) => (
  <div className="game" key={id}>
    <th>{id}</th>
    <td>{gdate}</td>
    <td>{gtime}</td>
    <td>{home}</td>
    <td>{team}</td>
  </div>
);

export default Game;
