import React, { Component } from "react";

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
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
          <label>Name: </label>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
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
        <input type="submit" value="Add New Player" />
      </form>
    );
  }
}

export default NewPlayer;
