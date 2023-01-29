const Total = ({ props }) => {
  const result = props.reduce((a, b) => {
    return a + b.exercises;
  }, 0);

  return <p>Number of exercises {result}</p>;
};

export default Total;
