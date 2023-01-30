const Statistic = ({ good, neutral, bad, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>;
  } else {
    return (
      <div>
        <p>
          <strong>Good : {good}</strong>
        </p>
        <p>
          <strong>neutral : {neutral}</strong>
        </p>
        <p>
          <strong style={{ color: "red" }}>bad: {bad}</strong>
        </p>
        <p>
          <strong style={{ color: "orange" }}>average: {average}</strong>
        </p>
        <p style={{ color: "green" }}>
          <strong>bad: {positive}</strong>
        </p>
      </div>
    );
  }
};
export default Statistic;
