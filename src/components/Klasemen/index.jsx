import React, { Component } from "react";
import KlasemenTable from "./KlasemenTable";
import socketIOClient from "socket.io-client";
import axios from "axios";

export default class Klasemen extends Component {
  constructor() {
    super();
    this.state = {
      teams: [
        {
          id_team: 1,
          name: "Barcelona",
          p: 3,
          w: 3,
          d: 0,
          l: 0,
          f: 2,
          a: 1,
          gf: 1,
          pts: 9
        },
        {
          id_team: 2,
          name: "Chelsea",
          p: 3,
          w: 2,
          d: 0,
          l: 1,
          f: 2,
          a: 1,
          gf: 1,
          pts: 6
        },
        {
          id_team: 3,
          name: "Juventus",
          p: 3,
          w: 0,
          d: 0,
          l: 2,
          f: 2,
          a: 1,
          gf: 1,
          pts: 12
        }
      ]
    };
  }

  // socket = socketIOClient("http://localhost:4000");

  componentWillMount() {
    this.sortLeaderboard();
    // axios.get(this.state.url).then(response => {
    //   console.log(response);
    // });

    // this.socket.on("update", update => {
    //   console.log(update);
    // });
  }

  sortLeaderboard = () => {
    let teams = this.state.teams;
    const sortest = teams.sort((a, b) => b.pts - a.pts);
    // console.log(sortest);
    this.setState({
      teams: sortest
    });
  };

  render() {
    return (
      <div>
        <KlasemenTable teams={this.state.teams} />
      </div>
    );
  }
}
