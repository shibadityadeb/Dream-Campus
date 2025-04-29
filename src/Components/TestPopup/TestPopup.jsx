"use client"

import { useState } from "react"
import "./TestPopup.css"

const TestPopup = ({ onStart, onClose }) => {
  const [permissionError, setPermissionError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleStartTest = async () => {
    setIsLoading(true)
    setPermissionError(false)

    try {
      // Request camera and microphone permissions
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })

      // Store the stream in sessionStorage to keep track of it
      window.testStream = stream

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

      // Start the test only if permissions were granted
      setIsLoading(false)
      onStart()
    } catch (err) {
      console.log("Permission denied: ", err)
      setIsLoading(false)
      setPermissionError(true)
      // Do NOT start the test if permissions are denied
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
        {permissionError && (
          <div className="permission-error">
            Camera and microphone access is required to take this test. Please allow access and try again.
          </div>
        )}
        <button onClick={handleStartTest} disabled={isLoading} className={isLoading ? "loading" : ""}>
          {isLoading ? "Requesting Access..." : "Start Test"}
        </button>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  )
}

export default TestPopup
