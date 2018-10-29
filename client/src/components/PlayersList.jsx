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
      playerSelected: false,
      showCreatePlayer: false
    };
    this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleShowNew = this.handleShowNew.bind(this);
  }

  componentDidMount() {
    fetchPlayers().then(data => this.setState({ players: data }));
  }

  createPlayer(player) {
    savePlayer(player).then(data => {
      fetchPlayers().then(data =>
        this.setState({ players: data, showCreatePlayer: false })
      );
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
      playerSelected: true
    });
  }

  handleCancelEdit() {
    this.setState({
      selectedPlayer: {},
      playerSelected: false
    });
  }

  handleShowNew() {
    this.setState({
      showCreatePlayer: true
    });
  }

  handleCancelNew() {
    this.setState({
      showCreatePlayer: false
    });
  }

  render() {
    const players = this.state.players;
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <h1 className="title">Player List</h1>
            <table className="table is-striped">
              <thead>
                <tr>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th> </th>
                  </tr>
                </tr>
              </thead>
              {players.map((player, i) => (
                <tbody>
                  <tr
                    className={
                      this.state.selectedPlayer === this.state.players[i]
                        ? "is-danger is-selected"
                        : null
                    }
                  >
                    <Player key={player.id} {...player} />
                    <td>
                      <button
                        className="button is-small"
                        value={player}
                        onClick={() => this.handleSelectPlayer(player)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            {this.state.playerSelected ? (
              <div>
                <EditPlayer
                  player={this.state.selectedPlayer}
                  onSubmit={this.updatePlayer}
                  deletePlayer={this.deletePlayer}
                />
                <button
                  className="button is-small"
                  onClick={() => this.handleCancelEdit()}
                >
                  Cancel
                </button>
              </div>
            ) : null}
            {this.state.showCreatePlayer ? (
              <div>
                <NewPlayer onSubmit={this.createPlayer} />
                <button
                  className="button is-small"
                  onClick={() => this.handleCancelNew()}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="button is-small"
                onClick={() => this.handleShowNew()}
              >
                Add New
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayersList;
