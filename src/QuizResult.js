import React from "react";
import questions from "./QuizData";
import "./QuizResult.css";

function QuizResult(props) {
    return (
        <div className="certificate-container">
            <div className="certificate-card">
                <div className="certificate-header">
                    <img
                        src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?t=st=1733827990~exp=1733831590~hmac=a549c95893a2bd87b91391b3849734b7b2c3cfbcd822b09ea26febdd46ab6b89&w=740"
                        alt="Certificate Logo"
                        className="certificate-logo"
                    />
                    <h1 className="certificate-title">Certificate of Achievement</h1>
                </div>
                <div className="certificate-body">
                    <h2 className="certificate-subtitle">React Quiz</h2>
                    <p className="certificate-text">
                        This certifies that <strong>{props.userName}</strong> has successfully completed the React Quiz
                        and achieved a score of <strong>{props.score}/100</strong>.
                    </p>
                    <p className="certificate-text">
                        Correct Answers: <strong>{props.correctAns}</strong> out of {questions.length}.
                    </p>
                </div>
                <div className="certificate-footer">
                    <button className="retry-button" onClick={props.handlePlayAgain}>
                        Re-Take Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuizResult;
