import React, { Component } from "react";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";
import NewPlayer from "./components/NewPlayer";
import NewGame from "./components/NewGame";
// import EditPlayer from "./components/EditPlayer";
import {
  fetchPlayers
  // fetchOnePlayer,
  // savePlayer,
  // fetchGames,
  // fetchOneGame,
  // saveGame
} from "./services/api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      games: []
    };
    this.handleCreatePlayer = this.handleCreatePlayer.bind(this);
    this.handleCreateGame = this.handleCreateGame.bind(this);
    // this.handleEditPlayer = this.handleEditPlayer.bind(this);
  }

  componentDidMount() {
    fetchPlayers().then(data => this.setState({ players: data }));
  }
  // handleEditPlayer(player) {
  //   // const player = this.state.players[0];
  //   // this.setState({
  //   //   player: player
  //   // });
  // }

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
        <PlayersList players={this.state.players} />
        <GamesList games={this.state.games} />
        <NewPlayer onSubmit={this.handleCreatePlayer} />
        <NewGame onSubmit={this.handleCreateGame} />
        {/* <EditPlayer
          player={this.state.players[0]}
          onSubmit={this.handleEditPlayer}
        /> */}
      </div>
    );
  }
}

export default App;
