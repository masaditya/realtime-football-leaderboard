import React, { Component } from "react";
import PertandinganView from "./view";
import socketIOClient from "socket.io-client";
import axios from "axios";

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
      },
      url : ""
    };
    
  }
  socket = socketIOClient("http://localhost:4000");

  UNSAFE_componentWillMount() {
    
    // axios.get(this.state.url,).then(response => {
    //   console.log(response);
    // })

    // this.socket.on("update", update => {
    //   console.log(update);
    // });

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
    // const match = this.state.match;
    // axios.post(this.state.url, match).then(response => {
    //   this.socket.emit("update", response);
    // })

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
