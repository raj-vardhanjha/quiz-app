import React from 'react'

function Result({score, totalQuestions}){
    return(
        <div>
            <h1>Quiz Completed!</h1>
            <h2>Your Score: {score} / {totalQuestions}</h2>
            <p>{score === totalQuestions ? "Excellent score!"
            : score >= totalQuestions / 2 ? "Good Job!"
        : "Keep practicing"}
        </p>

        </div>
    )
}

export default Result