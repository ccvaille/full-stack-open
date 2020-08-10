import React, { useState } from "react";

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const setSelectedAction = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const [voted, setVoted] = useState({});
  const voteAction = () => {
    voted[selected] =
      typeof voted[selected] === "undefined" ? 1 : voted[selected] + 1;
    setVoted({ ...voted });
    console.log(voted);
  };

  return (
    <div>
      <p>
        {selected}: {anecdotes[selected]}
      </p>
      <p>has {voted[selected] || 0} votes</p>
      <button onClick={setSelectedAction}>next</button>
      <button onClick={voteAction}>vote</button>
    </div>
  );
};

export default Anecdotes;
