import React, { useState } from 'react';
import '../App.css'
import Header from './Header';
import LandingPage from './Landingpage';
import CreateSurvey from './CreateSurvey';
import TakeSurvey from './TakeSurvey';

const App = () => {
    const [survey, setSurvey] = useState(false);
    const [question, setQuestion] = useState([]);
    const [createOrTake, setCreateOrTake] = useState(true);

    const getQuestions = (questions) => {
        setQuestion(questions);
        setSurvey(false);
    }

    const changeSurvey = (sur = true, val) => {
        setSurvey(sur);
        setCreateOrTake(val);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-6 col-md-6" style={{ textAlign: "-webkit-center" }}>
                    <Header />
                    {!survey ? (
                        <LandingPage changeSurvey={changeSurvey} />
                    ) : createOrTake ? (
                        <CreateSurvey getQuestions={getQuestions} questions={question} />
                    ) : (
                        <TakeSurvey changeSurvey={changeSurvey} questions={question} />
                    )}
                </div>
                <div className="col-lg-3 col-md-3"></div>
            </div>
        </div>
    );
}

export default App;