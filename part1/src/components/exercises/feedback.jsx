import React, { useState } from "react";
import Statistics from "./statistics";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setGoodAction = () => setGood(good + 1);
  const setNeutralAction = () => setNeutral(neutral + 1);
  const setBadAction = () => setBad(bad + 1);
  const all = good + neutral + bad;
  const positive = ((good / all || 0) * 100).toFixed(2);
  const average = (((good + bad * -1) / all || 0) * 100).toFixed(2);

  return (
    <div>
      <h3>give Feedback</h3>
      <button onClick={setGoodAction}>good</button>
      <button onClick={setNeutralAction}>neutral</button>
      <button onClick={setBadAction}>bad</button>
      <h3>Statistics</h3>
      <Statistics text="good" value={good}></Statistics>
      <Statistics text="neutral" value={neutral}></Statistics>
      <Statistics text="bad" value={bad}></Statistics>
      {good || neutral || bad ? (
        <div>
          <Statistics text="average" value={average}></Statistics>
          <Statistics text="positive" value={`${positive}%`}></Statistics>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Feedback;
