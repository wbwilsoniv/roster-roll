import React from "react";

function PlayersList(props) {
  const { players } = props.players;
  return (
    <div className="playerList">
      {props.players.map(player => {
        return (
          <div className="players" key={player.id}>
            <p>ID: {player.id}</p>
            <p>NAME: {player.name}</p>
            <p>TEAM: {player.team}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlayersList;
