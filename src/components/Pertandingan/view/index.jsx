import React from "react";

const PertandinganView = ({ team, handleChange, handleSubmit }) => {
  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <select
              className="custom-select"
              name="teamA"
              onChange={handleChange}
            >
              {team.map((tim, i) => {
                return (
                  <option value={tim.id} key={i}>
                    {tim.nama}
                  </option>
                );
              })}
            </select>
            <input
              placeholder="score"
              className="form-control my-2 w-50"
              type="number"
              name="scoreA"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <select
              className="custom-select"
              name="teamB"
              onChange={handleChange}
            >
              {team.map((tim, i) => {
                return (
                  <option value={tim.id} key={i}>
                    {tim.nama}
                  </option>
                );
              })}
            </select>
            <input
              placeholder="score"
              className="form-control my-2 w-50"
              type="number"
              name="scoreB"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PertandinganView;
