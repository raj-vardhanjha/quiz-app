import React from "react";

function Question({
  questionData,
  selectedAnswer,
  handleAnswerClick,
}) {
  return (
    <div className="w-full">

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {questionData.question}
      </h2>

      <div className="flex flex-col gap-4">

        {questionData.options.map((option, index) => (

          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer}
            className={`p-3 rounded-lg text-white font-medium transition-all duration-300

            ${
              selectedAnswer
                ? option === questionData.answer
                  ? "bg-green-500"
                  : option === selectedAnswer
                  ? "bg-red-500"
                  : "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600"
            }
            `}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Question;