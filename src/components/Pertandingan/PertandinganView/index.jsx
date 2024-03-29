import React from "react";

const PertandinganView = ({
  team,
  handleChange,
  handleSubmit,
  message,
  status
}) => {
  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col-md-5 ">
            <select
              className="custom-select"
              name="teamA"
              onChange={handleChange}
            >
              {team.map((tim, i) => {
                return (
                  <option value={tim.id_team} key={i}>
                    {tim.nama_team}
                  </option>
                );
              })}
            </select>
            <input
              placeholder="score"
              className="form-control mx-auto my-2 w-50"
              type="number"
              name="scoreA"
              onChange={handleChange}
            />
          </div>
          <b className="m-auto">VS</b>
          <div className="col-md-5">
            <select
              className="custom-select"
              name="teamB"
              onChange={handleChange}
            >
              {team.map((tim, i) => {
                return (
                  <option value={tim.id_team} key={i}>
                    {tim.nama_team}
                  </option>
                );
              })}
            </select>
            <input
              placeholder="score"
              className="form-control mx-auto my-2 w-50"
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
      {message && (
        <div className={`alert alert-${status}`}>
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
};

export default PertandinganView;
