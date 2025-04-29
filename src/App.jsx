"use client"

import { useState, useEffect } from "react"
import TestPopup from "./Components/TestPopup/TestPopup"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Courses from "./Components/Courses/Courses"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import RandomFact from "./Components/RandomFact/Randomfact"

const App = () => {
  const [showPopup, setShowPopup] = useState(false)

  // Check if the user has already seen the popup in this session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenTestPopup")

    // If coming back from test with a specific hash, scroll to that section
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const section = document.querySelector(hash)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }

    // Only show popup if user hasn't seen it in this session
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
    // Mark that user has seen the popup in this session
    sessionStorage.setItem("hasSeenTestPopup", "true")
  }

  const handleStartTest = () => {
    // Mark that user has seen the popup
    sessionStorage.setItem("hasSeenTestPopup", "true")
    // Navigate to the test page
    window.location.href = "/test.html"
  }

  return (
    <div>
      {/* Show popup only if showPopup is true */}
      {showPopup && <TestPopup onStart={handleStartTest} onClose={handleClosePopup} />}
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <div className="container">
        <section id="courses" className="section-padding section-bg">
          <Title
            subtitle="Our Programs"
            title="Academic Excellence & Innovation"
            description="Discover our comprehensive range of programs designed to prepare you for success in today's competitive world."
          />
          <Courses />
        </section>
        <section id="about" className="section-padding">
          <About />
        </section>
        <section id="campus" className="section-padding section-bg">
          <Title
            subtitle="Campus Gallery"
            title="Experience Our World-Class Facilities"
            description="Take a visual tour of our state-of-the-art campus facilities designed to enhance your learning experience."
          />
          <Campus />
        </section>
        <section id="testimonials" className="section-padding">
          <Title
            subtitle="Student Testimonials"
            title="What Our Students Say"
            description="Hear from our students about their transformative experiences and success stories."
          />
          <Testimonials />
        </section>
        <section id="contact" className="section-padding section-bg">
          <Title
            subtitle="Contact Us"
            title="Get In Touch With Us"
            description="Have questions or need more information? We're here to help you on your educational journey."
          />
          <Contact />
        </section>
      </div>
      <Footer />
      <RandomFact />
    </div>
  )
}

export default App
