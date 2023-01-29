import "./App.css";
import Contents from "./Components/contents/contents";
import Total from "./Components/total/total";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const App = () => {
  const course = "Half Stack application development";
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

  return (
    <div>
      <Header course={course} />
      <Contents props={parts} />
      <Total />
    </div>
  );
};

export default App;
