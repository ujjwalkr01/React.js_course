import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import { useCallback } from "react";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggler, setAllowToggler] = useState(false);

  console.log("App is running!");

  const handleToggleParagraph = useCallback(() => {
    if (allowToggler) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggler]);

  const handleAllowToggler = () => {
    setAllowToggler(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={handleAllowToggler}>Allow Toggle</Button>
      <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
