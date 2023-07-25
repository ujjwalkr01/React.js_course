import React, { useState } from "react";

const QuestionsAndAnswers = (props) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState({ 1: "" });
  const [addNpublish, setAddNpublish] = useState(false);
  const [add, setAdd] = useState(false);
  const [publish, setPublish] = useState(false);
  const [id, setId] = useState(1);

  const incrementHandler = () => {
    setId((prevId) => prevId + 1);

    if (props.selected === "Multi-select" && id < 4) {
      setAnswers({ ...answers, [id + 1]: "" });
    }
    if (props.selected === "Single select" && id < 2) {
      setAnswers({ ...answers, [id + 1]: "" });
    }
    if (
      (props.selected === "Multi-select" && id === 3) ||
      (props.selected === "Single select" && id === 1)
    ) {
      setAddNpublish(true);
    }
  };

  const decrementHandler = (e) => {
    const row = parseInt(e.target.accessKey);
    const ans = { ...answers };
    delete ans[row];

    setAnswers(ans);
    setAddNpublish(false);
    setId((prevId) => prevId - 1);
  };

  const onInputChange = (e) => {
    const key = e.target.accessKey;
    setAnswers({ ...answers, [key]: e.target.value });
  };

  const onQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const submitQuestion = (e) => {
    e.preventDefault();
    if (add) {
      props.setQuestions({ question, answers });
      setQuestion("");
      setAnswers({ 1: "" });
      setAddNpublish(false);
      setAdd(false);
      setId(1);
    } else if (publish) {
      props.setQuestions({ question, answers }, publish);
      setQuestion("");
      setAnswers({ 1: "" });
      setAddNpublish(false);
      setPublish(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitQuestion}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              ?
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            value={question}
            onChange={onQuestionChange}
            aria-describedby="basic-addon1"
          />
        </div>
        <span style={{ float: "left", margin: "10px 0px" }}>Options</span>
        <div>
          {Object.keys(answers).map((key) => (
            <div key={key} className="input-group">
              <input
                accessKey={key}
                type="text"
                className="form-control"
                value={answers[key]}
                onChange={onInputChange}
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span
                  key={key}
                  onClick={incrementHandler}
                  className={`input-group-text ${addNpublish ? "disable" : ""}`}
                >
                  +
                </span>
                <span
                  accessKey={key}
                  onClick={decrementHandler}
                  className="input-group-text"
                >
                  -
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={addNpublish ? "" : "hide"} style={{ float: "right" }}>
          <button
            type="submit"
            onClick={() => {
              setAdd(true);
            }}
            className="tiny ui button"
          >
            Add Question
          </button>
          <button
            type="submit"
            onClick={() => {
              setPublish(true);
            }}
            className="tiny ui button"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionsAndAnswers;
