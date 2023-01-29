import "./App.css";
import Contents from "./Components/contents/contents";
import Total from "./Components/total/total";

const Header = ({ props }) => {
  class Test {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
    testMethod() {
      return "Hi " + this.name + "Code : " + this.code;
    }
    testSecond() {
      return this.code + "fs";
    }
  }

  const person1 = new Test("Terminator", 125411);
  console.log(person1.testMethod());
  return <h1>{props}</h1>;
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
      <Total props={parts} />
    </div>
  );
};

export default App;
