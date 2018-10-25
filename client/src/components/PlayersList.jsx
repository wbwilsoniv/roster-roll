import React, { Component } from "react";
import Player from "./Player";
import EditPlayer from "./EditPlayer";
import NewPlayer from "./NewPlayer";
import {
  fetchPlayers,
  savePlayer,
  updatePlayer,
  deletePlayer
} from "./../services/api";

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selectedPlayer: {},
      playerSelected: false
    };
    this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {
    fetchPlayers().then(data => this.setState({ players: data }));
  }

  createPlayer(player) {
    savePlayer(player).then(data => {
      fetchPlayers().then(data => this.setState({ players: data }));
    });
  }

  updatePlayer(player) {
    updatePlayer(player).then(data => {
      this.setState({
        selectedPlayer: data,
        playerSelected: false
      });
      fetchPlayers().then(data => this.setState({ players: data }));
    });
  }

  deletePlayer(id) {
    deletePlayer(id).then(data => {
      fetchPlayers().then(data =>
        this.setState({
          players: data,
          playerSelected: false
        })
      );
    });
  }

  handleSelectPlayer(player) {
    this.setState({
      selectedPlayer: player,
      playerSelected: !this.state.playerSelected
    });
  }

  render() {
    const players = this.state.players;
    return (
      <div className="playerList">
        {players.map(player => (
          <div>
            <Player key={player.id} {...player} />
            <button
              className="button"
              value={player}
              onClick={() => this.handleSelectPlayer(player)}
            >
              Edit
            </button>
          </div>
        ))}
        {this.state.playerSelected ? (
          <EditPlayer
            player={this.state.selectedPlayer}
            onSubmit={this.updatePlayer}
            deletePlayer={this.deletePlayer}
          />
        ) : null}
        <NewPlayer onSubmit={this.createPlayer} />
      </div>
    );
  }
}
export default PlayersList;
