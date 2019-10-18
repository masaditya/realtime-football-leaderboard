import React from "react";
import Pertandingan from "./components/Pertandingan";
import Klasemen from "./components/Klasemen";

function App() {
  const ip_database = "http://192.168.66.90:8089";

  return (
    <div className="container-fluid bg-light p-4">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Pertandingan ip_database={ip_database} />
        </div>
        <div className="col-md-6 col-sm-12">
          <Klasemen ip_database={ip_database} />
        </div>
      </div>
    </div>
  );
}

export default App;
