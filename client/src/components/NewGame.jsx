import React, { Component } from "react";

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gdate: "",
      gtime: "",
      home: null,
      team: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label">New Game</label>
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
                type="text"
                name="team"
                className="input"
                value={this.state.team}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-small is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewGame;
