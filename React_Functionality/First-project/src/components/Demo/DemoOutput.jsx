import MyParagraph from "./MyParagraph";
import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput is running!");
  return (
    <MyParagraph>{props.show ? "This is new Paragraph!" : ""}</MyParagraph>
  );
};
export default React.memo(DemoOutput);
