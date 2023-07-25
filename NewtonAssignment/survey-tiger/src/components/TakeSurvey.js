import React from "react";

const TakeSurvey = (props) => {
  const confirmed = (e) => {
    e.preventDefault();
    if (props.publishConfirmed) {
      props.publishConfirmed();
    } else {
      props.changeSurvey(false);
    }
  };

  const questions = props.questions;

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <form>
            {questions.map((ques, index) => {
              return (
                <div style={{ float: "left", clear: "left" }} key={index}>
                  <>
                    <p>{`${index + 1} : ${ques.question["question"]}`}</p>
                    {Object.keys(ques.question["answers"]).map((key) => (
                      <div
                        key={key}
                        style={{
                          float: "left",
                          clear: "left",
                          margin: "0px 0px 5px 0px",
                        }}
                        className="form-check"
                      >
                        {ques.questionType === "Multi-select" ? (
                          <label className="form-check-label" htmlFor="check1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="check1"
                              name="option1"
                              value="something"
                            />
                            {ques.question["answers"][key]}
                          </label>
                        ) : (
                          <div>
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="optradio"
                              />
                              {ques.question["answers"][key]}
                            </label>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                </div>
              );
            })}
            <button
              style={{ float: "right", clear: "left" }}
              onClick={confirmed}
              className="tiny ui button"
            >
              Confirm
            </button>
          </form>
        </div>
      ) : (
        <div>
          "Survey not available. Please create a survey first."
          <button
            style={{ float: "right", clear: "left" }}
            onClick={confirmed}
            className="tiny ui button"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default TakeSurvey;
