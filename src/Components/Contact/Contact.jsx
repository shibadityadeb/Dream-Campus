"use client"

import { useState } from "react"
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission with a timeout
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      // Reset form after submission
      setFormData({
        name: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  function handleReset() {
    setSubmitted(false)
  }

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-col">
          <h3>
            Get in Touch <img src={msg_icon || "/placeholder.svg"} alt="" />
          </h3>
          <p>
            Have questions about our courses, admissions, or programs? We're here to help! Whether you're a student,
            parent, or educator, feel free to reach out to us with your queries, feedback, or collaboration
            opportunities.
          </p>
          <div className="contact-info">
            <ul>
              <li>
                <img src={mail_icon || "/placeholder.svg"} alt="" />
                contact@dreamcampus.com
              </li>
              <li>
                <img src={phone_icon || "/placeholder.svg"} alt="" />
                +1 (123) 456-7890
              </li>
              <li>
                <img src={location_icon || "/placeholder.svg"} alt="" />
                123 Learning Avenue, Knowledge City, CA 90210, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-col">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Query Submitted Successfully!</h3>
              <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              <button onClick={handleReset}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className={loading ? "loading" : ""} disabled={loading}>
                {loading ? "Submitting..." : "Submit Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact

