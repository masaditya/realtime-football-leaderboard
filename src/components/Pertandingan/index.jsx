import React, { Component } from "react";
import PertandinganView from "./view";

export default class Pertandingan extends Component {
  constructor() {
    super();

    this.state = {
      team: [
        { nama: "barcelona" },
        { nama: "juventus" },
        { nama: "chelsea" },
        { nama: "ajax" }
      ]
    };
  }

  handleTeamA = team => {
    console.log(team);
  };

  render() {
    return (
      <div>
        <PertandinganView
          team={this.state.team}
          handleTeamA={this.handleTeamA}
        />
      </div>
    );
  }
}
