import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/1")
      .then((res) => {
        setPlayer1(res.data);
      })
      .catch((error) => alert("there is an error fetching your data"));
  }, []);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/2")
      .then((res) => {
        setPlayer2(res.data);
      })
      .catch((error) => alert("there is an error fetching your data"));
  }, []);

  console.log(player1.mass);

  return (
    <div className="container">
      <div className="text-center">
        <button type="button" class="btn btn-primary btn-lg m-3 ">
          Play!
        </button>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{player1.name}</h5>
              <p className="card-text">{`${player1.name} has a mass power of ${player1.mass}.`}</p>
            </div>
            <span class="badge bg-success">Success</span>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{player2.name}</h5>
              <p className="card-text">{`${player2.name} has a mass power of ${player2.mass}.`}</p>
            </div>
            <span class="badge bg-danger">Danger</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
