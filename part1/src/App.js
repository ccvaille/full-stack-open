import React, { useState } from "react";
import logo from "./logo.svg";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Exercises from "./components/exercises/index";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  // setTimeout(() => setNum(num + 1), 1000);
  const setToValue = (newValue) => {
    setNum(newValue);
  };
  const increaseByOne = () => setToValue(num + 1);
  const decreaseByOne = () => setToValue(num - 1);
  const setToZero = () => setToValue(0);
  const decreaseByOneThousand = () => setToValue(1000);

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAll] = useState([]);
  // const [right,setRight] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="coolFe"></Hello>
        <Counter counter={num}></Counter>
        <div className="btn-list">
          <Button handleClick={increaseByOne} text="+1"></Button>
          <Button handleClick={setToZero} text="zero"></Button>
          <Button handleClick={decreaseByOne} text="-1"></Button>
          <Button handleClick={decreaseByOneThousand} text="to 1000"></Button>
        </div>
        {clicks.left} {clicks.right}
        <div className="btn-list">
          <Button
            handleClick={() => {
              setClicks({
                // left: clicks.left + 1,
                ...clicks,
                left: clicks.left + 1,
              });
              setAll(allClicks.concat("L"));
            }}
            text="left"
          ></Button>
          <Button
            handleClick={() => {
              setClicks({
                // left: clicks.left,
                ...clicks,
                right: clicks.right + 1,
              });
              setAll(allClicks.concat("R"));
            }}
            text="right"
          ></Button>
        </div>
        <p>{allClicks.join(" ")}</p>
        <p>------- Exercises --------</p>
        <Exercises></Exercises>
      </header>
    </div>
  );
};

export default App;
