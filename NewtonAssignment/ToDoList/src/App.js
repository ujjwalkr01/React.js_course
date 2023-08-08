import { useState } from "react";
import "./App.css";
let workList = "",
  arr = [];
function App() {
  const [isAddingTask, setTask] = useState(workList);
  const [taskArr, setTaskArr] = useState([]);
  const [isEditClicked, setEditedValue] = useState(false);
  const [editedTask,setEditedTask]=useState('');

  const handletheList = (event) => {
    workList = event.target.value;
    setTask(workList);
  };

  const handleTask = () => {
    if (workList == "") {
      return;
    }
    console.log(workList, taskArr);
    setTaskArr([...taskArr, isAddingTask]);
    console.log(isAddingTask);
  };

  const handleEdit = () => {
    setEditedValue((prevState) => !isEditClicked);
  };

  const handleDelete = () => {};

  const handleEditTask=(event)=>{
    console.log(event.target.value)
  }

  const handleSaveButton=()=>{

  }
  return (
    <div className="main">
      <textarea
        id="task"
        type="text"
        onChange={handletheList}
        value={isAddingTask}
      />
      <button id="btn" onClick={handleTask}>
        Add Task
      </button>
      <ul>
        {taskArr.map((task, ind) => (
          <li key={ind} id={ind} className="list">
            {task}
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
            {isEditClicked && (
              <>
                <textarea className="editTask" onChange={handleEditTask} value={editedTask}/>
                <button className="saveTask" onClick={handleSaveButton}>Save</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
