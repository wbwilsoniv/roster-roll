import React from "react";

const Game = ({ id, gdate, gtime, home, team }) => (
  <div className="gameDiv">
    <div className="game" key={id}>
      <span>ID: {id}</span>
      <span>DATE: {gdate}</span>
      <span>TIME: {gtime}</span>
      <span>HOME: {home}</span>
      <span>TEAM: {team}</span>
    </div>
  </div>
);

export default Game;
