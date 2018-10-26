import React, { Component } from "react";

class EditGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.game.id,
      gdate: this.props.game.gdate,
      gtime: this.props.game.gtime,
      home: this.props.game.home,
      team: this.props.game.team
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      id: this.state.id,
      gdate: this.state.gdate,
      gtime: this.state.gtime,
      home: this.state.home,
      team: this.state.team
    };
    this.props.onSubmit(data);
  }

  deleteGame(evt) {
    evt.preventDefault();
    this.props.deleteGame(this.state.id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>DATE: </label>
          <input
            placeholder="Date MM/DD/YY"
            type="text"
            name="gdate"
            value={this.state.gdate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>TIME: </label>
          <input
            placeholder="Time 12/hr"
            type="text"
            name="gtime"
            value={this.state.gtime}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>HOME: </label>
          <select placeholder="Home Team?" onChange={this.handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>TEAM: </label>
          <input
            placeholder="Team Name"
            type="text"
            name="team"
            value={this.state.team}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="button" value="Add New Game">
          Save
        </button>
        <button className="button" onClick={this.deleteGame}>
          Delete
        </button>
      </form>
    );
  }
}

export default EditGame;
