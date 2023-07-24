import { useState } from "react";
import "./App.css";
let workList = "",
  arr = [];
function App() {
  const [isAddingTask, setTask] = useState(workList);

  const handletheList = (event) => {
    workList = event.target.value;
  };

  const handleTask = () => {
    if (workList == "") {
      return;
    }
    // arr.push(workList);
    console.log(workList, arr);
    setTask((prevState) => {
      prevState=workList;
      arr.push(prevState);
      return prevState;
    });
    console.log(isAddingTask);
  };

  return (
    <div className="main">
      <textarea id="task" type="text" onChange={handletheList} />
      <button id="btn" onClick={handleTask}>
        Add Task
      </button>
      <ul>
        {/* {arr.map((ele, ind) => (
          <li key={ind} className="list">
            {ele}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
