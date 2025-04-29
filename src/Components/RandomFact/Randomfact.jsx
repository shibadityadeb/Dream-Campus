"use client"

import { useState, useEffect } from "react"
import facts from "../../data/facts.json"
import "./RandomFact.css"

const RandomFact = () => {
  const [fact, setFact] = useState("")
  const [show, setShow] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length)
    setFact(facts[randomIndex])
  }

  useEffect(() => {
    getRandomFact()
    // Increase the delay before showing the fact
    const timer = setTimeout(() => {
      setShow(true)
    }, 5000) // Show after 5 seconds instead of 2

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsExiting(true)
    // Add a small delay before fully hiding to allow animation to complete
    setTimeout(() => {
      setShow(false)
      setIsExiting(false)
    }, 500)
  }

  return (
    <>
      {show && (
        <div
          className={`random-fact-container ${isExiting ? "exiting" : "show"}`}
          style={{
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? "translateX(-20px)" : "translateX(0)",
            transition: "left 0.5s ease-in-out, opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <h3>🎓 Did You Know?</h3>
          <p>{fact}</p>
          <button onClick={getRandomFact}>Show Another</button>
        </div>
      )}
    </>
  )
}

export default RandomFact
