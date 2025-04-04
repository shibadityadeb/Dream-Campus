"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change navbar style
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Toggle mobile menu
  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  // Scroll to section function
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
      setMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <img src={logo || "/placeholder.svg"} alt="DreamCampus Logo" className="navbar-logo" />
      <ul className={menuOpen ? "active" : ""}>
        <li
          onClick={() => {
            scrollToSection("home")
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection("courses")
          }}
        >
          Courses
        </li>
        <li
          onClick={() => {
            scrollToSection("about")
          }}
        >
          About Us
        </li>
        <li
          onClick={() => {
            scrollToSection("campus")
          }}
        >
          Campus
        </li>
        <li
          onClick={() => {
            scrollToSection("testimonials")
          }}
        >
          Testimonials
        </li>
        <li
          onClick={() => {
            scrollToSection("contact")
          }}
        >
          Contact Us
        </li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={menuOpen ? "line1 active" : "line1"}></div>
        <div className={menuOpen ? "line2 active" : "line2"}></div>
        <div className={menuOpen ? "line3 active" : "line3"}></div>
      </div>
    </nav>
  )
}

export default Navbar

