import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectShape, setSelectedShape] = useState("square");
  const [shapeArr, setShapeArr] = useState([]);

  const handleSelectOption = (event) => {
    setSelectedShape(event.target.value);
    console.log(event.target.value);
  };

  const handleAddingShape = () => {
    setShapeArr([...shapeArr, selectShape]);
    console.log(shapeArr);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleSelectOption} value={selectShape}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddingShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapeArr.map((shapes, ind) => (
          <div className={shapes} key={ind}>
            {ind}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
