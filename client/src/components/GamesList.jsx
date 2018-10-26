import React, { Component } from "react";
import Game from "./Game";
import NewGame from "./NewGame";
import EditGame from "./EditGame";
import { fetchGames, saveGame, updateGame, deleteGame } from "../services/api";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedGame: {},
      gameSelected: false
    };
    this.handleSelectGame = this.handleSelectGame.bind(this);
    this.createGame = this.createGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    fetchGames().then(data => this.setState({ games: data }));
  }

  createGame(game) {
    saveGame(game).then(data => {
      fetchGames().then(data => this.setState({ games: data }));
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

  render() {
    const games = this.state.games;
    return (
      <div className="gameList">
        {games.map(game => (
          <div>
            <Game key={game.id} {...game} />
            <button
              className="button"
              value={game}
              onClick={() => this.handleSelectGame(game)}
            >
              Edit
            </button>
          </div>
        ))}
        {this.state.gameSelected ? (
          <EditGame
            game={this.state.selectedGame}
            onSubmit={this.updateGame}
            deleteGame={this.deleteGame}
          />
        ) : null}
        <NewGame onSubmit={this.createGame} />
      </div>
    );
  }
}
export default GamesList;
