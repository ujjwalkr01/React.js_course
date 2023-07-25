import React from "react";

const LandingPage = (props) => {
  const goToCreatePage = () => {
    props.changeSurvey(true, true);
  };

  const goToTakePage = () => {
    props.changeSurvey(true, false);
  };

  return (
    <div>
      <div onClick={goToCreatePage} className="survey-button text-center">
        Create Survey
      </div>
      <div onClick={goToTakePage} className="survey-button">
        Take Survey
      </div>
    </div>
  );
};

export default LandingPage;
