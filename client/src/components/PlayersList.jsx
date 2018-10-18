import React from "react";
import Player from "./Player";

const PlayersList = ({ players }) => (
  <div className="playerList">
    {players.map((player, i) => (
      <Player key={i} {...player} />
    ))}
  </div>
);

export default PlayersList;
