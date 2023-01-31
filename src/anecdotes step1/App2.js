import { useEffect, useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const App2 = () => {
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [maxVote, setMaxVote] = useState("");

  // increment the value in position 2 by one

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  useEffect(() => {
    if (Math.max(...votes) > 0) {
      setMaxVote(anecdotes[votes.indexOf(Math.max(...votes))]);
      console.log();
    }
  }, [votes]);

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} Vote</div>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next anecdote
      </button>
      <button onClick={voteForAnecdote}>Vote</button>
      <h1>Anecdotes with most votes</h1>
      <div>{maxVote}</div>
      <h2>Has {votes[votes.indexOf(Math.max(...votes))]} Votes</h2>
    </>
  );
};

export default App2;
