import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import quizData from "../data/quizData";

function Quiz() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setshowResult] = useState(false);

  const handleAnswerClick = (option) => {
    setselectedAnswer(option);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setcurrentQuestion(currentQuestion + 1);
      setselectedAnswer(null);
    } else {
      setshowResult(true);
    }
  };

  if (showResult) {
    return (
      <Result
        score={score}
        totalQuestions={quizData.length}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Quiz App
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Question {currentQuestion + 1} of {quizData.length}
        </p>

        <Question
          questionData={quizData[currentQuestion]}
          selectedAnswer={selectedAnswer}
          handleAnswerClick={handleAnswerClick}
        />

        {selectedAnswer && (
          <button
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        )}

      </div>
    </div>
  );
}

export default Quiz;