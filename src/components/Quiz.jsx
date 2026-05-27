import React from "react";
import Question from "./Question";
import Result from "./Result"
import { useState } from "react";

function Quiz(){
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [selectedAnswer, setselectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const [showResult, setshowResult] = useState(false)

    const handleAnswerClick = () => {
        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < quizData.length) {
            setcurrentQuestion(currentQuestion + 1)
            setselectedAnswer(null)

        } else {
            setshowResult(true)
        }

        if (showResult) {
            return(
                <Result score = {score}
                totalQuestions = {quizData.length}></Result>
            )
        }

      
        
          return(
            <div className="container">
                <h1>Quiz App</h1>
                <p>Question {currentQuestion + 1} of {quizData.length}</p>
                <Question questionData={quizData[currentQuestion]}
                selectedAnswer={selectedAnswer}
                handleAnswerClick={handleAnswerClick}></Question>
                {selectedAnswer && (
                    <button
                    className="next-btn"
                    onClick={handleNextQuestion}>
                    Next Question
                </button>)}
            </div>
          )
    }
}

export default Quiz