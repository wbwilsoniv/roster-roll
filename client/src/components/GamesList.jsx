import React from "react";
import Game from "./Game";

const GamesList = ({ games }) => (
  <div className="gameList">
    {games.map((game, i) => (
      <Game key={i} {...game} />
    ))}
  </div>
);

export default GamesList;
