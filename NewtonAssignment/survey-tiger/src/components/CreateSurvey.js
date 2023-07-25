import React, { useState } from "react";
import QuestionsAndAnswers from "./Question_Ans";
import TakeSurvey from "./TakeSurvey";

const CreateSurvey = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Question Type");
  const [shouldPublish, setShouldPublish] = useState(false);
  const [questions, setQuestions] = useState([]);

  const onSelectedChange = (selected) => {
    setSelected(selected.trim());
  };

  const publishConfirmed = () => {
    props.getQuestions(questions);
  };

  const setQuestionsHandler = (question, publish) => {
    if (question) {
      setQuestions([...questions, { question, questionType: selected }]);
      if (publish) {
        setShouldPublish(true);
      }
    }
  };

  return (
    <div>
      {!shouldPublish ? (
        <>
          <div className="dropdown">
            <div
              onClick={() => setOpen(!open)}
              className={`graydiv ui selection dropdown ${
                open ? "visible active" : ""
              }`}
            >
              <i className="dropdown icon"></i>
              <div className="text">{selected}</div>
              <div className={`menu ${open ? "visible transition" : ""}`}>
                <div
                  onClick={(e) => {
                    onSelectedChange(e.target.innerHTML);
                  }}
                  className="item"
                >
                  Multi-select
                </div>
                <div
                  onClick={(e) => {
                    onSelectedChange(e.target.innerHTML);
                  }}
                  className="item"
                >
                  Single select
                </div>
              </div>
            </div>
          </div>
          <div>
            {selected !== "Select Question Type" ? (
              <div>
                <QuestionsAndAnswers
                  selected={selected}
                  setQuestions={setQuestionsHandler}
                />
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <TakeSurvey publishConfirmed={publishConfirmed} questions={questions} />
      )}
    </div>
  );
};

export default CreateSurvey;
