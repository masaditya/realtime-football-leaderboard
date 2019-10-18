import React, { Component } from "react";

import Pertandingan from "./components/Pertandingan";
import Klasemen from "./components/Klasemen";

export default class App extends Component {
  ip_database = "http://192.168.66.90:8089";

  render() {
    return (
      <div className="container-fluid bg-light p-4">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Pertandingan ip_database={this.ip_database} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Klasemen ip_database={this.ip_database} />
          </div>
        </div>
      </div>
    );
  }
}
