"use client"

import { useState, useEffect } from "react"
import "./TestComponent.css"

const TestComponent = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    // Fetch the questions from the public folder
    fetch("/questions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions")
        }
        return response.json()
      })
      .then((data) => {
        console.log("Questions loaded:", data.questions)
        setQuestions(data.questions)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error loading questions:", error)
        setIsLoading(false)
      })
  }, [])

  const handleAnswerSelection = (option) => {
    setSelectedOption(option)
  }

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      // Don't proceed if no option is selected
      return
    }

    // Save the selected answer
    setSelectedAnswers((prevAnswers) => [...prevAnswers, selectedOption])

    // Reset selected option for next question
    setSelectedOption(null)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => {
      return questions[index].answer.includes(answer)
    }).length
  }

  if (isLoading) {
    return (
      <div className="test-container">
        <div className="loading">Loading questions...</div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="test-container">
        <div className="error">No questions available. Please try again later.</div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const isEligible = score >= 3 // Eligible if score is 3 or higher

    return (
      <div className="test-container">
        <div className={`result ${isEligible ? "eligible" : "not-eligible"}`}>
          <h3>
            Your Score: {score}/{questions.length}
          </h3>
          {isEligible ? (
            <>
              <p className="eligible-text">Congratulations! You are eligible for admission.</p>
              <button className="btn btn-primary" onClick={() => (window.location.href = "#contact")}>
                Contact Admissions
              </button>
            </>
          ) : (
            <>
              <p className="not-eligible-text">
                Thank you for taking the test. Unfortunately, you didn't meet the eligibility criteria.
              </p>
              <button className="btn btn-outline" onClick={() => window.location.reload()}>
                Try Again
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="test-container">
      <div className="question-counter">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>

      <h3 className="question-text">{currentQuestion.question}</h3>

      <ul className="options-list">
        {currentQuestion.options.map((option, idx) => (
          <li
            key={idx}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => handleAnswerSelection(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      <button
        className={`next-btn ${selectedOption === null ? "disabled" : ""}`}
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
      >
        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Submit Test"}
      </button>
    </div>
  )
}

export default TestComponent
