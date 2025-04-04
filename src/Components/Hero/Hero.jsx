"use client"

import "./Hero.css"

function Hero() {
  function scrollToSection() {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with knowledge, skills and experiences needed to
          excel in the dynamic field of education
        </p>
        <button className="btn" onClick={scrollToSection}>
          Explore Programs
        </button>
      </div>
      <div className="scroll-indicator" onClick={scrollToSection}>
        <span>SCROLL DOWN</span>
        <div className="mouse"></div>
      </div>
    </div>
  )
}

export default Hero

