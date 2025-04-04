"use client"

import { useState, useEffect } from "react"
import "./Testimonials.css"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

function Testimonials() {
  const testimonialsData = [
    {
      img: user_1,
      name: "Sarah Jade",
      location: "Edusity, USA",
      review:
        "The curriculum exceeded my expectations. Mentorship from industry experts and real-world projects made me feel confident in my skills and future career.",
    },
    {
      img: user_2,
      name: "Michael Lee",
      location: "TechVerse, UK",
      review:
        "Every lecture felt relevant and impactful. The hands-on approach and detailed guidance pushed my limits in the best way possible.",
    },
    {
      img: user_3,
      name: "Aisha Khan",
      location: "CodePath, India",
      review:
        "I learned more in these few months than in my last year of college. Super helpful instructors and the community is top-notch!",
    },
    {
      img: user_4,
      name: "Carlos Martinez",
      location: "InnoTech, Spain",
      review:
        "This was the turning point in my tech journey. The experience, mentorship, and support system built my confidence like never before.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
      }, 5000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [autoplay, testimonialsData.length])

  // Pause autoplay when user interacts
  function handleInteraction() {
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => {
      setAutoplay(true)
    }, 10000)
  }

  function handleNext() {
    handleInteraction()
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  function handleBack() {
    handleInteraction()
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
  }

  function handleDotClick(index) {
    handleInteraction()
    setCurrentIndex(index)
  }

  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <button className="back-btn" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="next-btn" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div className="slider">
          <div className="slide" key={currentIndex}>
            <div className="user-info">
              <img src={testimonialsData[currentIndex].img || "/placeholder.svg"} alt="User" />
              <div>
                <h3>{testimonialsData[currentIndex].name}</h3>
                <span>{testimonialsData[currentIndex].location}</span>
              </div>
            </div>
            <p>"{testimonialsData[currentIndex].review}"</p>
          </div>
        </div>
        <div className="pagination">
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={index === currentIndex ? "pagination-dot active" : "pagination-dot"}
              onClick={() => {
                handleDotClick(index)
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

