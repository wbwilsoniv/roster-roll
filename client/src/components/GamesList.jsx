import React from "react";

function GamesList(props) {
  const { games } = props.games;
  return (
    <div className="gameList">
      {props.games.map(game => {
        return (
          <div className="games" key={game.id}>
            <span>ID: {game.id}</span>
            <span>DATE: {game.gdate}</span>
            <span>TIME: {game.gtime}</span>
            <span>HOME: {game.home}</span>
            <span>TEAM: {game.team}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GamesList;
