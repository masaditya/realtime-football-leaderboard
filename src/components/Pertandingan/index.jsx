import React, { Component } from "react";
import PertandinganView from "./view";

export default class Pertandingan extends Component {
  constructor() {
    super();

    this.state = {
      team: [
        { id: 1, nama: "barcelona" },
        { id: 2, nama: "juventus" },
        { id: 3, nama: "chelsea" },
        { id: 4, nama: "ajax" }
      ],
      match: {
        teamA: null,
        teamB: null,
        scoreA: 0,
        scoreB: 0
      }
    };
  }

  handleChange = event => {
    console.log(event.target.name);
    let match = this.state.match;
    match[event.target.name] = event.target.value;
    console.log(match);
    this.setState({ match });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.match);
  };

  render() {
    return (
      <div>
        <PertandinganView
          team={this.state.team}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
