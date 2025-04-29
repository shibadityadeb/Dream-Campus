"use client"

import "./TestPopup.css"

const TestPopup = ({ onStart, onClose }) => {
  const handleStartTest = async () => {
    try {
      // Request camera and microphone permissions
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true })

      // Try to request fullscreen
      try {
        const docElement = document.documentElement
        if (docElement.requestFullscreen) {
          await docElement.requestFullscreen()
        } else if (docElement.webkitRequestFullscreen) {
          await docElement.webkitRequestFullscreen()
        } else if (docElement.msRequestFullscreen) {
          await docElement.msRequestFullscreen()
        }
      } catch (err) {
        console.log("Fullscreen request failed: ", err)
        // Continue even if fullscreen fails
      }

      // Start the test
      onStart()
    } catch (err) {
      console.log("Permission denied: ", err)
      // If permissions denied, still start the test
      onStart()
    }
  }

  return (
    <div className="test-popup-overlay">
      <div className="test-popup-card">
        <h2>🎓 Take the Admission Eligibility Test</h2>
        <p>
          Test your skills and see if you're eligible for admission to our prestigious programs. This test requires
          camera and microphone access for proctoring.
        </p>
        <button onClick={handleStartTest}>Start Test</button>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  )
}

export default TestPopup
