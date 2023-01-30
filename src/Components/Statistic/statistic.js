const StatisticLine = ({ text, value }) => {
  console.log(text, value);
  return (
    <p>
      {text}:{value}
    </p>
  );
};

const Statistic = ({ good, neutral, bad, all, average, positive }) => {
  if (!good && !neutral && !bad) {
    return <h3>No feedback given</h3>;
  } else {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    );
  }
};
export default Statistic;
