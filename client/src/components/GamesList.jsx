import React, { Component } from "react";
import Game from "./Game";
import NewGame from "./NewGame";
import EditGame from "./EditGame";
import Loader from "./Loader";
import { fetchGames, saveGame, updateGame, deleteGame } from "../services/api";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      games: [],
      selectedGame: {},
      gameSelected: false,
      showCreateGame: false
    };
    this.handleSelectGame = this.handleSelectGame.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleShowNew = this.handleShowNew.bind(this);
    this.handleCancelNew = this.handleCancelNew.bind(this);
    this.createGame = this.createGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    fetchGames().then(data => this.setState({ isLoading: false, games: data }));
  }

  createGame(game) {
    saveGame(game).then(data => {
      fetchGames().then(data =>
        this.setState({ games: data, showCreateGame: false })
      );
    });
  }

  updateGame(game) {
    updateGame(game).then(data => {
      this.setState({
        selectedGame: data,
        gameSelected: false
      });
      fetchGames().then(data => this.setState({ games: data }));
    });
  }

  deleteGame(id) {
    deleteGame(id).then(data => {
      fetchGames().then(data =>
        this.setState({
          games: data,
          gameSelected: false
        })
      );
    });
  }

  handleSelectGame(game) {
    this.setState({
      selectedGame: game,
      gameSelected: true
    });
  }

  handleCancelEdit() {
    this.setState({
      selectedGame: {},
      gameSelected: false
    });
  }

  handleShowNew() {
    this.setState({ showCreateGame: true });
  }

  handleCancelNew() {
    this.setState({ showCreateGame: false });
  }

  render() {
    const games = this.state.games;
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return (
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <h1 className="title">Schedule</h1>
              <table className="table is-striped">
                <thead>
                  <tr>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Home</th>
                      <th>Team</th>
                      <th> </th>
                    </tr>
                  </tr>
                </thead>
                {games.map(game => (
                  <tbody>
                    <tr>
                      <Game key={game.id} {...game} />
                      <td>
                        <button
                          className="button is-small"
                          value={game}
                          onClick={() => this.handleSelectGame(game)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {this.state.gameSelected ? (
                <div>
                  <EditGame
                    game={this.state.selectedGame}
                    onSubmit={this.updateGame}
                    deleteGame={this.deleteGame}
                  />
                  <button
                    className="button is-small is-danger is-outlined"
                    onClick={() => this.handleCancelEdit()}
                  >
                    Cancel
                  </button>
                </div>
              ) : null}
              {this.state.showCreateGame ? (
                <div>
                  <NewGame onSubmit={this.createGame} />
                  <button
                    className="button is-small is-danger is-outlined"
                    onClick={() => this.handleCancelNew()}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="container">
                  <button
                    className="button is-small is-info is-outlined"
                    onClick={() => this.handleShowNew()}
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default GamesList;
