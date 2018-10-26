import React, { Component } from "react";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";
import {
  fetchPlayers,
  fetchGames,
  saveGame,
  deletePlayer,
  fetchOnePlayer
  // fetchOneGame,
} from "./services/api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      games: [],
      playerSelected: false
    };
    this.createGame = this.createGame.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleEditPlayer = this.handleEditPlayer.bind(this);
  }

  componentDidMount() {
    fetchPlayers().then(data => this.setState({ players: data }));
    fetchGames().then(data => this.setState({ games: data }));
  }
  // handleEditPlayer(player) {
  //   // const player = this.state.players[0];
  //   // this.setState({
  //   //   player: player
  //   // });
  // }

  createGame(game) {
    saveGame(game).then(data => {
      fetchGames().then(data => this.setState({ games: data }));
    });
  }

  deletePlayer(id) {
    deletePlayer(id).then(data => {
      fetchPlayers().then(data => this.setState({ players: data }));
    });
  }

  handleSelect(id) {
    fetchOnePlayer(id).then(data => {
      this.setState({ selectedPlayer: data });
    });
  }

  handleCreatePlayer(player) {
    const players = this.state.players;
    this.setState({
      players: [...players, player]
    });
    console.log(players, player);
  }

  handleCreateGame(game) {
    const games = this.state.games;
    this.setState({
      games: [...games, game]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <img src="./Roster-Roll.svg" alt="Roster Roll logo" />
        </div>
        <Home />
        <PlayersList
          players={this.state.players}
          // onClick={this.handleSelect}
          handleSelect={this.handleSelect}
        />
        <GamesList games={this.state.games} />
        {/* <NewPlayer onSubmit={this.createPlayer} /> */}
        {/* <NewGame onSubmit={this.createGame} /> */}
      </div>
    );
  }
}

export default App;
