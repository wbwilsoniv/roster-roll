import React from "react";
import Player from "./Player";

const PlayersList = ({ players }) => (
  <div className="playerList">
    {players.map(player => (
      <Player key={player.id} {...player} />
    ))}
  </div>
);

export default PlayersList;
