import React, { useState, useEffect } from "react"
import facts from "../../data/facts.json"
import "./RandomFact.css"

const RandomFact = () => {
  const [fact, setFact] = useState("")
  const [show, setShow] = useState(false)

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length)
    setFact(facts[randomIndex])
  }

  useEffect(() => {
    getRandomFact()
    const timer = setTimeout(() => {
      setShow(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`random-fact-container ${show ? "show" : ""}`}>
      <h3>🎓 Did You Know?</h3>
      <p>{fact}</p>
      <button onClick={getRandomFact}>Show Another</button>
    </div>
  )
}

export default RandomFact
