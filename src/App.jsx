import React from "react";
import Pertandingan from "./components/Pertandingan";
import Klasemen from "./components/Klasemen";

// menghendel semua tampilan
function App() {
  return (
    <div className="container-fluid bg-info p-4">
      <div className="row">
        <div className="col-md-6 col-md-6 col-sm-12" >
          <div className="mt-auto mb-0">
            <Pertandingan />
          </div>
        </div>
        <div className="col-md-6 col-md-6 col-sm-12" >
          <Klasemen />
        </div>
      </div>
    </div>

  );
}



export default App;
