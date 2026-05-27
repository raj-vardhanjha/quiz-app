import React from 'react'

function Question({
    questionData,
    selectedAnswer,
    handleAnswerClick
}) {
    return (
        <div className='w-full'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>{questionData.question}</h2>
            <div className='flex flex-col gap-3'>
                {questionData.options.map((option, index) => ( <button key = {index} className= {selectedAnswer ? option ===questionData.answer ? "correct" : option === selectedAnswer ? "wrong" : "" : ""}
            onClick={() => handleAnswerClick(option)}
            disabled = {selectedAnswer}>
                {option}
            </button>
        ))}
            </div>
            
        </div>
    )
}

export default Question