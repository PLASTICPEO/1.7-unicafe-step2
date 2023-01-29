const Total = () => {
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const result = parts.reduce((a, b) => {
    return a + b.exercises;
  }, 0);

  return <p>Number of exercises {result}</p>;
};

export default Total;
