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

  let result = parts.reduce((a, b) => a.exercises + b.exercises);

  return <p>Number of exercises {result}</p>;
};

export default Total;
