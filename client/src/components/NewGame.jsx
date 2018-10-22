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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Date: </label>
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
            placeholder="Date MM/DD/YY"
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
          <label>Team: </label>
          <input
            placeholder="Team Name"
            type="text"
            name="team"
            value={this.state.team}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Add New Game" />
      </form>
    );
  }
}

export default NewGame;
