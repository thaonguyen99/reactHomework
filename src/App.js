import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/parent";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(() => {
    const initialNum = 0;
    return initialNum;
  });

  const showText = (event) => {
    console.log(event.target.value);
  };

  const showOpt = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => console.log(setNumber(number + 1))}>
        click me
      </button>
      <br></br>
      <input onChange={(e) => showText(e)}></input>
      <br />
      <select onChange={(e) => showOpt(e)}>
        <option value="java">Java</option>
        <option value="c/c++">C/C++</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      <Parent />
    </div>
  );
}

export default App;
