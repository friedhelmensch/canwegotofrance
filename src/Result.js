import React from "react";
import "./App.css";

function Result(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Is it safe to go to France?</p>
        <img src={props.img} alt="logo" width="75%" height="75%" />
        <p>{props.recommendation} </p>
        <p>
          {props.description.line1} <br></br> {props.description.line2}
        </p>
      </header>
    </div>
  );
}

export default Result;
