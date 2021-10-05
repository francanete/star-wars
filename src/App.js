import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const randomPlayer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handlePlay = () => {
    const people1 = randomPlayer(1, 80);

    axios
      .get(`https://swapi.dev/api/people/${people1}`)
      .then((res) => {
        setPlayer1(res.data);
      })
      .catch((error) => alert("there is an error fetching your data"));

    const people2 = randomPlayer(1, 80);

    axios
      .get(`https://swapi.dev/api/people/${people2}`)
      .then((res) => {
        setPlayer2(res.data);
      })
      .catch((error) => alert("there is an error fetching your data"));
  };

  return (
    <div className="container">
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-lg m-3"
          onClick={() => handlePlay()}
        >
          Play!
        </button>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{player1.name}</h5>
              <p className="card-text">{`${player1.name} has a height of ${player1.height}.`}</p>
            </div>
            <span className="badge bg-success">Success</span>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{player2.name}</h5>
              <p className="card-text">{`${player2.name} has a height of ${player2.height}.`}</p>
            </div>
            <span className="badge bg-danger">Danger</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
