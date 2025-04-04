"use client"

import { useState } from "react"
import "./About.css"
import about_img1 from "../../assets/about.png"
import about_img2 from "../../assets/play-icon.png"

function About() {
  const [showFullText, setShowFullText] = useState(false)

  function openVideo() {
    window.open("https://youtu.be/hW9DTIfkdTY?si=tWEKLstf5gL7ftkm", "_blank")
  }

  function toggleReadMore() {
    setShowFullText(!showFullText)
  }

  // Stats data
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "200+", label: "Expert Faculty" },
    { number: "25,000+", label: "Alumni Worldwide" },
    { number: "98%", label: "Placement Rate" },
  ]

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="video-wrapper">
            <div className="video-container" onClick={openVideo}>
              <img src={about_img1 || "/placeholder.svg"} alt="Campus Video" className="about-img" />
              <div className="play-button-overlay">
                <div className="play-button">
                  <img src={about_img2 || "/placeholder.svg"} alt="Play" className="play-icon" />
                </div>
                <span className="watch-text">Watch Our Story</span>
              </div>
            </div>
          </div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-header">
            <span className="about-badge">About Us</span>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
          </div>

          <div className={showFullText ? "about-content expanded" : "about-content"}>
            <p>
              The university goes beyond traditional academics by offering a curriculum that is constantly updated to
              match the evolving demands of the industry. Our innovative approach to education combines theoretical
              knowledge with practical applications, ensuring that students are well-prepared for the challenges of the
              real world.
            </p>

            <div className={showFullText ? "additional-content visible" : "additional-content"}>
              <p>
                Understanding that leadership is built through experience, the university offers immersive learning
                environments. Our state-of-the-art facilities and hands-on training programs provide students with the
                opportunity to develop critical thinking, problem-solving, and leadership skills.
              </p>

              <p>
                At the heart of the university's philosophy lies a deep commitment to individual growth. We believe that
                education should be transformative, empowering students to discover their passions and pursue their
                dreams with confidence and determination.
              </p>

              <p>
                Our global network of alumni and industry partners creates a vibrant community that supports students
                throughout their academic journey and beyond. Through mentorship programs, internships, and networking
                events, we connect students with professionals who can guide them toward successful careers.
              </p>
            </div>
          </div>

          <div className="about-actions">
            <button className="read-more-btn" onClick={toggleReadMore}>
              {showFullText ? "Read Less" : "Read More"}
            </button>
            <button
              className="about-cta-btn"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

