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
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Edit Game</label>
          <div className="field">
            <label className="label">Date: </label>
            <div className="control">
              <input
                placeholder="Date MM/DD/YY"
                type="text"
                name="gdate"
                className="input"
                value={this.state.gdate}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Time: </label>
            <div className="control">
              <input
                placeholder="Time 12/hr"
                type="text"
                name="gtime"
                className="input"
                value={this.state.gtime}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Home: </label>
            <div className="select">
              <select
                className="input"
                placeholder="Home Team?"
                onChange={this.handleInputChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Team: </label>
            <div className="control">
              <input
                placeholder="Team Name"
                className="input"
                type="text"
                name="team"
                value={this.state.team}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-small is-success">
                Save
              </button>
            </div>
            <div className="control">
              <button
                className="button is-small is-danger"
                onClick={this.deletePlayer}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditGame;
